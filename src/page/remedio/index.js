import { useEffect, useState } from 'react';
import { Alert, Image, Modal, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const MEDICATION_KEY = '@medications_list';
const CHANNEL_ID = 'medication-reminder';

export default function Remedio() {
  const navigation = useNavigation();
  const [medicationList, setMedicationList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [medicamento, setMedicamento] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [comprimido, setComprimido] = useState('');
  const [horario, setHorario] = useState('');
  const [horarios, setHorarios] = useState([]);
  const [ateQuando, setAteQuando] = useState('');
  const [fotoMedicamento, setFotoMedicamento] = useState(null);
  const [modalConfirmacao, setModalConfirmacao] = useState(false); // modal de confirmação

  useEffect(() => {
    async function loadMedications() {
      try {
        const saved = await AsyncStorage.getItem(MEDICATION_KEY);
        if (!saved) return;

        const list = JSON.parse(saved);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const ativos = [];
        const vencidos = [];

        for (const med of list) {
          const partes = med.ateQuando?.split('/').map(Number);
          if (partes && partes.length === 3) {
            const [day, month, year] = partes;
            const dataFinal = new Date(year, month - 1, day);
            dataFinal.setHours(0, 0, 0, 0);

            if (dataFinal < today) {
              vencidos.push(med);
            } else {
              ativos.push(med);
            }
          } else {
            ativos.push(med);
          }
        }

        for (const med of vencidos) {
          if (med.notificationIds?.length > 0) {
            for (const id of med.notificationIds) {
              try {
                await Notifications.cancelScheduledNotificationAsync(id);
              } catch (e) {
                console.log('Aviso ao cancelar notificação de vencido:', e);
              }
            }
          }
        }

        if (vencidos.length > 0) {
          await AsyncStorage.setItem(MEDICATION_KEY, JSON.stringify(ativos));
          console.log(`${vencidos.length} remédio(s) vencido(s) removido(s) automaticamente.`);
        }

        setMedicationList(ativos);
      } catch (error) {
        console.log('Erro ao carregar remédios:', error);
      }
    }

    loadMedications();
  }, []);

  // ─── Permissões de câmera/galeria ────────────────────────────────────────────
  const solicitarPermissoes = async () => {
    const camera = await ImagePicker.requestCameraPermissionsAsync();
    const galeria = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (camera.status !== 'granted' || galeria.status !== 'granted') {
      Alert.alert('Permissão negada', 'É necessário permitir acesso à câmera e galeria.');
      return false;
    }
    return true;
  };

  const tirarFoto = async () => {
    const permissoes = await solicitarPermissoes();
    if (!permissoes) return;

    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      setFotoMedicamento(resultado.assets[0].uri);
    }
  };

  const escolherDaGaleria = async () => {
    const permissoes = await solicitarPermissoes();
    if (!permissoes) return;

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      setFotoMedicamento(resultado.assets[0].uri);
    }
  };

  // ─── Selecionar medicamento da lista ─────────────────────────────────────────
  function handleSelectMedication(index) {
    if (index === -1) {
      setSelectedIndex(-1);
      setMedicamento('');
      setDosagem('');
      setHorarios([]);
      setHorario('');
      setComprimido('');
      setAteQuando('');
      setFotoMedicamento(null);
    } else {
      const med = medicationList[index];
      setSelectedIndex(index);
      setMedicamento(med.medicamento || '');
      setDosagem(med.dosagem || '');
      setHorarios(med.horarios || []);
      setComprimido(med.comprimido || '');
      setHorario('');
      setAteQuando(normalizeDateString(med.ateQuando || ''));
      setFotoMedicamento(med.foto || null);
    }
  }

  async function registerForPushNotificationsAsync() {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    return finalStatus === 'granted';
  }

  function isValidTime(value) {
    const parts = value.split(':');
    if (parts.length !== 2) return false;
    const [hours, minutes] = parts.map(Number);
    return (
      Number.isInteger(hours) && Number.isInteger(minutes) &&
      hours >= 0 && hours <= 23 &&
      minutes >= 0 && minutes <= 59
    );
  }

  function handleAddHorario() {
    const value = horario.trim();
    if (!value) {
      Alert.alert('Horário vazio', 'Digite um horário para adicionar.');
      return;
    }
    if (!isValidTime(value)) {
      Alert.alert('Horário inválido', 'Use o formato HH:MM, por exemplo 08:30.');
      return;
    }
    if (horarios.includes(value)) {
      Alert.alert('Horário duplicado', 'Esse horário já foi adicionado.');
      return;
    }
    setHorarios(prev => [...prev, value].sort());
    setHorario('');
  }

  function handleRemoveHorario(index) {
    setHorarios(prev => prev.filter((_, i) => i !== index));
  }

  function normalizeDateString(value) {
    if (!value || typeof value !== 'string') return '';
    const isoMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (isoMatch) {
      return `${isoMatch[3]}/${isoMatch[2]}/${isoMatch[1]}`;
    }
    return value;
  }

  function formatDateInput(value) {
    const digits = value.replace(/\D/g, '').slice(0, 8);
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  }

  function isValidDate(value) {
    const parts = value.split('/').map(Number);
    if (parts.length !== 3) return false;
    const [day, month, year] = parts;
    const date = new Date(year, month - 1, day);
    return (
      Number.isInteger(day) && Number.isInteger(month) && Number.isInteger(year) &&
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  }

  async function scheduleNotificationForTime(timeString, medName, dosage) {
    const [hours, minutes] = timeString.split(':').map(Number);

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
        name: 'Lembrete de Remédio',
        importance: Notifications.AndroidImportance.DEFAULT,
        sound: 'default',
      });
    }

    const now = new Date();
    const nextTime = new Date(now);
    nextTime.setHours(hours, minutes, 0, 0);
    if (nextTime <= now) {
      nextTime.setDate(nextTime.getDate() + 1);
    }
    const secondsUntilNext = Math.round((nextTime.getTime() - now.getTime()) / 1000);

    return Notifications.scheduleNotificationAsync({
      content: {
        title: `Hora de tomar ${medName}`,
        body: dosage ? `Dosagem: ${dosage}` : 'Não esqueça de tomar seu remédio.',
        sound: 'default',
        ...(Platform.OS === 'android' ? { channelId: CHANNEL_ID } : {}),
      },
      trigger: {
        type: 'timeInterval',
        seconds: Math.max(60, secondsUntilNext),
        repeats: true,
      },
    });
  }

  async function scheduleMedicationReminder(medName, med, oldNotificationIds = []) {
    const granted = await registerForPushNotificationsAsync();
    if (!granted) {
      Alert.alert('Permissão', 'Permissão de notificações não concedida.');
      return [];
    }

    if (oldNotificationIds?.length > 0) {
      await Promise.all(oldNotificationIds.map(id => Notifications.cancelScheduledNotificationAsync(id)).catch(() => {}));
    }

    const ids = [];
    for (const time of med.horarios) {
      try {
        const id = await scheduleNotificationForTime(time, medName, med.dosagem);
        ids.push(id);
      } catch (error) {
        console.log('Erro ao agendar notificação:', error);
      }
    }
    return ids;
  }

  // ─── Valida campos e abre o modal ────────────────────────────────────────────
  function handleRegisterMedication() {
    if (!medicamento.trim()) {
      Alert.alert('Preencha o remédio', 'Digite o nome do remédio que você está usando.');
      return;
    }
    if (horarios.length === 0) {
      Alert.alert('Adicione horários', 'Adicione ao menos um horário para receber o lembrete.');
      return;
    }
    if (!ateQuando.trim() || !isValidDate(ateQuando.trim())) {
      Alert.alert('Data inválida', 'Informe a data final no formato DD/MM/YYYY.');
      return;
    }
    setModalConfirmacao(true);
  }

  // ─── Chamada ao confirmar no modal ───────────────────────────────────────────
  async function handleConfirmarRegistro() {
    setModalConfirmacao(false);

    const newRecord = {
      medicamento: medicamento.trim(),
      dosagem: dosagem.trim(),
      horarios,
      ateQuando: ateQuando.trim(),
      registradoEm: new Date().toISOString(),
      notificationIds: [],
      comprimido,
      foto: fotoMedicamento,
    };

    try {
      const notificationIds = await scheduleMedicationReminder(
        newRecord.medicamento,
        newRecord,
        selectedIndex >= 0 ? medicationList[selectedIndex].notificationIds : []
      );
      newRecord.notificationIds = notificationIds;

      let newList;
      if (selectedIndex >= 0) {
        newList = medicationList.map((med, i) => (i === selectedIndex ? newRecord : med));
      } else {
        newList = [...medicationList, newRecord];
      }

      await AsyncStorage.setItem(MEDICATION_KEY, JSON.stringify(newList));
      setMedicationList(newList);
      handleSelectMedication(-1);
      Alert.alert('Sucesso', selectedIndex >= 0 ? 'Remédio atualizado!' : 'Remédio registrado com sucesso!');
    } catch (error) {
      console.log('Erro ao salvar remédio:', error);
      Alert.alert('Erro', 'Não foi possível registrar o remédio.');
    }
  }

  async function handleDeleteMedication(index) {
    if (index < 0 || index >= medicationList.length) return;

    const med = medicationList[index];
    Alert.alert(
      'Excluir remédio',
      `Tem certeza que deseja excluir "${med.medicamento}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              if (med.notificationIds?.length > 0) {
                for (const id of med.notificationIds) {
                  try {
                    await Notifications.cancelScheduledNotificationAsync(id);
                  } catch (cancelError) {
                    console.log('Aviso ao cancelar notificação:', cancelError);
                  }
                }
              }

              const newList = medicationList.filter((_, i) => i !== index);
              await AsyncStorage.setItem(MEDICATION_KEY, JSON.stringify(newList));
              setMedicationList(newList);

              if (selectedIndex === index) {
                handleSelectMedication(-1);
              }
              Alert.alert('Sucesso', 'Remédio excluído com sucesso.');
            } catch (error) {
              console.log('Erro ao excluir remédio:', error);
              Alert.alert('Erro', `Não foi possível excluir o remédio: ${error.message}`);
            }
          },
        },
      ]
    );
  }

  async function handleTestNotification() {
    try {
      const granted = await registerForPushNotificationsAsync();
      if (!granted) {
        Alert.alert('Permissão', 'Permissão de notificações não concedida.');
        return;
      }

      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
          name: 'Lembrete de Remédio',
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }

      await Notifications.scheduleNotificationAsync({
        content: {
          title: `Teste de remédio: ${medicamento || 'seu remédio'}`,
          body: 'Essa é uma notificação de teste para seu lembrete de remédio.',
          ...(Platform.OS === 'android' ? { channelId: CHANNEL_ID } : {}),
        },
        trigger: {
          type: 'timeInterval',
          seconds: 5,
          repeats: false,
        },
      });

      Alert.alert('Teste agendado', 'Notificação de teste será exibida em 5 segundos.');
    } catch (error) {
      console.log('Erro ao testar notificação:', error);
      Alert.alert('Erro', 'Falha ao agendar notificação de teste.');
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <LinearGradient colors={['#1B5E5A', '#4CA6A8']} style={styles.header}>
        <Text style={styles.title}>Medicamento</Text>
        <Text style={styles.subtitle}>Registre seu remédio e receba lembretes.</Text>
      </LinearGradient>

      <View style={styles.formCard}>

        {/* ── FOTO DO MEDICAMENTO ── */}
        <Text style={styles.label}>Foto do medicamento</Text>
        <View style={styles.fotoContainer}>
          <Pressable style={styles.fotoPerfil} onPress={tirarFoto}>
            {fotoMedicamento ? (
              <Image source={{ uri: fotoMedicamento }} style={styles.imagemMedicamento} />
            ) : (
              <View style={styles.fotoPlaceholder}>
                <Ionicons name="medkit-outline" size={48} color="#4CA6A8" />
                <Text style={styles.fotoPlaceholderText}>Toque para fotografar</Text>
              </View>
            )}
          </Pressable>

          <Pressable style={styles.btnGaleria} onPress={escolherDaGaleria}>
            <Ionicons name="images-outline" size={16} color="#fff" />
            <Text style={styles.btnGaleriaText}>Escolher da galeria</Text>
          </Pressable>

          {fotoMedicamento && (
            <Pressable style={styles.btnRemoverFoto} onPress={() => setFotoMedicamento(null)}>
              <Text style={styles.btnRemoverFotoText}>Remover foto</Text>
            </Pressable>
          )}
        </View>

        <Text style={styles.label}>Nome do remédio</Text>
        <TextInput
          style={styles.input}
          value={medicamento}
          onChangeText={setMedicamento}
          placeholder="Ex: Paracetamol"
          placeholderTextColor="#9AA8A6"
        />

        <Text style={styles.label}>Dosagem</Text>
        <TextInput
          style={styles.input}
          value={dosagem}
          onChangeText={setDosagem}
          placeholder="Ex: 500mg / 5ml"
          placeholderTextColor="#9AA8A6"
        />

        <Text style={styles.label}>Comprimidos</Text>
        <TextInput
          style={styles.input}
          value={comprimido}
          onChangeText={setComprimido}
          placeholder="Ex: 1"
          placeholderTextColor="#9AA8A6"
        />

        <Text style={styles.label}>Adicionar horário</Text>
        <View style={styles.timeRow}>
          <TextInput
            style={[styles.input, styles.timeInput]}
            value={horario}
            onChangeText={setHorario}
            placeholder="Ex: 08:00"
            placeholderTextColor="#9AA8A6"
          />
          <Pressable style={styles.addTimeButton} onPress={handleAddHorario}>
            <Text style={styles.addTimeButtonText}>Adicionar</Text>
          </Pressable>
        </View>

        {horarios.length > 0 ? (
          <View style={styles.timesList}>
            {horarios.map((time, index) => (
              <View key={time} style={styles.timeItem}>
                <Text style={styles.timeText}>{time}</Text>
                <Pressable onPress={() => handleRemoveHorario(index)}>
                  <Text style={styles.removeTimeText}>Remover</Text>
                </Pressable>
              </View>
            ))}
          </View>
        ) : null}

        <Text style={styles.label}>Até quando</Text>
        <TextInput
          style={styles.input}
          value={ateQuando}
          onChangeText={text => setAteQuando(formatDateInput(text))}
          placeholder="Ex: 30/06/2026"
          placeholderTextColor="#9AA8A6"
        />

        <Pressable style={styles.button} onPress={handleRegisterMedication}>
          <Text style={styles.buttonText}>{selectedIndex >= 0 ? 'Atualizar remédio' : 'Registrar remédio'}</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={() => navigation.goBack()}>
          <Text style={styles.secondaryButtonText}>Voltar para Home</Text>
        </Pressable>

        <Pressable style={styles.testButton} onPress={handleTestNotification}>
          <Text style={styles.testButtonText}>Testar notificação</Text>
        </Pressable>

        {selectedIndex >= 0 ? (
          <Pressable style={styles.deleteButton} onPress={() => handleDeleteMedication(selectedIndex)}>
            <Text style={styles.deleteButtonText}>Excluir este remédio</Text>
          </Pressable>
        ) : null}
      </View>

      {medicationList.length > 0 ? (
        <View style={styles.savedMedicationCard}>
          <Text style={styles.label}>Remédios salvos</Text>
          <View style={styles.medicationList}>
            {medicationList.map((med, index) => (
              <View key={index} style={styles.medicationItem}>
                <Pressable
                  style={[
                    styles.medicationItemButton,
                    selectedIndex === index && styles.medicationItemButtonActive,
                  ]}
                  onPress={() => handleSelectMedication(index)}
                >
                  {med.foto ? (
                    <Image source={{ uri: med.foto }} style={styles.medicationItemFoto} />
                  ) : (
                    <View style={styles.medicationItemFotoPlaceholder}>
                      <Ionicons name="medkit-outline" size={28} color="#4CA6A8" />
                    </View>
                  )}
                  <View style={styles.medicationItemInfo}>
                    <Text style={styles.medicationItemName}>{med.medicamento}</Text>
                    <Text style={styles.medicationItemSubtext}>{med.horarios?.join(', ')}</Text>
                  </View>
                </Pressable>
                <Pressable
                  style={styles.medicationDeleteBtn}
                  onPress={() => handleDeleteMedication(index)}
                >
                  <Text style={styles.medicationDeleteText}>✕</Text>
                </Pressable>
              </View>
            ))}
          </View>
          <Pressable style={styles.newMedicationBtn} onPress={() => handleSelectMedication(-1)}>
            <Text style={styles.newMedicationText}>+ Novo remédio</Text>
          </Pressable>
        </View>
      ) : null}

      {/* ── MODAL DE CONFIRMAÇÃO ── */}
      <Modal
        visible={modalConfirmacao}
        transparent
        animationType="fade"
        onRequestClose={() => setModalConfirmacao(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>

            {/* Cabeçalho */}
            <LinearGradient colors={['#1B5E5A', '#4CA6A8']} style={styles.modalHeader}>
              <Ionicons name="checkmark-circle-outline" size={32} color="#fff" />
              <Text style={styles.modalHeaderTitle}>Confirmar dados</Text>
              <Text style={styles.modalHeaderSubtitle}>Revise as informações antes de salvar</Text>
            </LinearGradient>

            <ScrollView style={styles.modalBody} contentContainerStyle={styles.modalBodyContent}>

              {/* Foto + Nome + Dosagem */}
              <View style={styles.modalFotoRow}>
                {fotoMedicamento ? (
                  <Image source={{ uri: fotoMedicamento }} style={styles.modalFoto} />
                ) : (
                  <View style={styles.modalFotoPlaceholder}>
                    <Ionicons name="medkit-outline" size={36} color="#4CA6A8" />
                  </View>
                )}
                <View style={styles.modalFotoInfo}>
                  <Text style={styles.modalMedName}>{medicamento.trim()}</Text>
                  {dosagem.trim() ? (
                    <Text style={styles.modalMedDosagem}>{dosagem.trim()}</Text>
                  ) : (
                    <Text style={styles.modalMedDosagemVazia}>Dosagem não informada</Text>
                  )}
                  {comprimido.trim() ? (
                    <Text style={styles.modalMedDosagem}>{comprimido.trim()} comprimido(s)</Text>
                  ) : null}
                </View>
              </View>

              <View style={styles.modalDivider} />

              {/* Horários */}
              <View style={styles.modalInfoRow}>
                <Ionicons name="time-outline" size={18} color="#4CA6A8" />
                <Text style={styles.modalInfoLabel}>Horários</Text>
              </View>
              <View style={styles.modalHorariosWrap}>
                {horarios.map(h => (
                  <View key={h} style={styles.modalHorarioBadge}>
                    <Text style={styles.modalHorarioBadgeText}>{h}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.modalDivider} />

              {/* Até quando */}
              <View style={styles.modalInfoRow}>
                <Ionicons name="calendar-outline" size={18} color="#4CA6A8" />
                <Text style={styles.modalInfoLabel}>Até quando</Text>
                <Text style={styles.modalInfoValue}>{ateQuando.trim()}</Text>
              </View>

            </ScrollView>

            {/* Botões */}
            <View style={styles.modalFooter}>
              <Pressable
                style={styles.modalBtnCancelar}
                onPress={() => setModalConfirmacao(false)}
              >
                <Text style={styles.modalBtnCancelarText}>Corrigir</Text>
              </Pressable>

              <Pressable
                style={styles.modalBtnConfirmar}
                onPress={handleConfirmarRegistro}
              >
                <Text style={styles.modalBtnConfirmarText}>
                  {selectedIndex >= 0 ? 'Atualizar' : 'Confirmar'}
                </Text>
              </Pressable>
            </View>

          </View>
        </View>
      </Modal>
      {/* ── FIM MODAL ── */}

    </ScrollView>
  );
}
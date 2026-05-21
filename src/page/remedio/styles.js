import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },

  content: {
    paddingBottom: 30,
  },

  header: {
    height: 170,
    paddingTop: 50,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  headerView: {
    flexDirection: "row",
    gap: 15,
  },

  backButton: {
    // position: 'absolute',
    // top: 55,
    // left: 20,
    // zIndex: 10,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  subtitle: {
    color: '#D4F1EF',
    marginTop: 8,
    fontSize: 14,
  },

  formCard: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },

  savedMedicationCard: {
    marginTop: 24,
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },

  medicationList: {
    marginBottom: 16,
  },

  medicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginRight: 8,
  },

  medicationItemButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F7F6',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#D7E4E1',
  },

  medicationItemButtonActive: {
    backgroundColor: '#D4F1EF',
    borderColor: '#1B5E5A',
  },

  medicationItemName: {
    color: '#235347',
    fontWeight: '700',
    fontSize: 14,
  },

  medicationItemSubtext: {
    color: '#7A9996',
    fontSize: 12,
    marginTop: 4,
  },

  medicationDeleteBtn: {
    backgroundColor: '#B00020',
    borderRadius: 12,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  medicationDeleteText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  newMedicationBtn: {
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#E6FFFA',
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1B5E5A',
    borderStyle: 'dashed',
  },

  newMedicationText: {
    color: '#1B5E5A',
    fontWeight: '700',
  },

  label: {
    color: '#235347',
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#F5F7F6',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#2A3B38',
  },

  button: {
    marginTop: 24,
    backgroundColor: '#1B5E5A',
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  timeInput: {
    flex: 1,
    marginRight: 10,
  },

  addTimeButton: {
    backgroundColor: '#1B5E5A',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addTimeButtonText: {
    color: '#fff',
    fontWeight: '700',
  },

  timesList: {
    marginTop: 12,
    backgroundColor: '#F5F7F6',
    borderRadius: 15,
    padding: 12,
  },

  timeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#D7E4E1',
  },

  timeText: {
    color: '#235347',
    fontSize: 15,
    fontWeight: '600',
  },

  removeTimeText: {
    color: '#B00020',
    fontWeight: '700',
  },

  secondaryButton: {
    marginTop: 12,
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1B5E5A',
  },

  secondaryButtonText: {
    color: '#1B5E5A',
    fontWeight: '700',
    fontSize: 16,
  },

  testButton: {
    marginTop: 12,
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: '#E6FFFA',
  },

  testButtonText: {
    color: '#235347',
    fontWeight: '700',
    fontSize: 16,
  },

  deleteButton: {
    marginTop: 12,
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: '#B00020',
  },

  deleteButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  infoBox: {
    marginTop: 24,
    backgroundColor: '#EAF7F4',
    borderRadius: 20,
    padding: 16,
  },

  infoTitle: {
    fontWeight: '700',
    color: '#1B5E5A',
    marginBottom: 8,
  },

  infoText: {
    color: '#235347',
    fontSize: 14,
    marginTop: 4,
  },

  // Foto do medicamento
  fotoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },

  fotoPerfil: {
    width: 140,
    height: 140,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#EAF4F4',
    borderWidth: 2,
    borderColor: '#4CA6A8',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagemMedicamento: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  fotoPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  fotoPlaceholderText: {
    fontSize: 12,
    color: '#4CA6A8',
    textAlign: 'center',
  },

  btnGaleria: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#4CA6A8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },

  btnGaleriaText: {
    color: '#fff',
    fontSize: 14,
  },

  btnRemoverFoto: {
    paddingVertical: 4,
  },

  btnRemoverFotoText: {
    color: '#E57373',
    fontSize: 13,
    textDecorationLine: 'underline',
  },

  medicationItemFoto: {
    width: 52,
    height: 52,
    borderRadius: 10,
    resizeMode: 'cover',
    marginRight: 12,
  },

  medicationItemFotoPlaceholder: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#EAF4F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  medicationItemInfo: {
    flex: 1,
    justifyContent: 'center',
  },

  // Modal de confirmação
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  modalContainer: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },

  modalHeader: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 6,
  },

  modalHeaderTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginTop: 4,
  },

  modalHeaderSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
  },

  modalBody: {
    maxHeight: 340,
  },

  modalBodyContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },

  modalFotoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  modalFoto: {
    width: 72,
    height: 72,
    borderRadius: 12,
    resizeMode: 'cover',
  },

  modalFotoPlaceholder: {
    width: 72,
    height: 72,
    borderRadius: 12,
    backgroundColor: '#EAF4F4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalFotoInfo: {
    flex: 1,
    gap: 4,
  },

  modalMedName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1B5E5A',
  },

  modalMedDosagem: {
    fontSize: 14,
    color: '#4CA6A8',
    fontWeight: '500',
  },

  modalMedDosagemVazia: {
    fontSize: 13,
    color: '#B0BEC5',
    fontStyle: 'italic',
  },

  modalDivider: {
    height: 1,
    backgroundColor: '#E8F0EF',
    marginVertical: 4,
  },

  modalInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },

  modalInfoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#455A55',
    flex: 1,
  },

  modalInfoValue: {
    fontSize: 14,
    color: '#1B5E5A',
    fontWeight: '500',
  },

  modalHorariosWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 4,
  },

  modalHorarioBadge: {
    backgroundColor: '#EAF4F4',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#4CA6A8',
  },

  modalHorarioBadgeText: {
    fontSize: 13,
    color: '#1B5E5A',
    fontWeight: '600',
  },

  modalFooter: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E8F0EF',
  },

  modalBtnCancelar: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#E8F0EF',
  },

  modalBtnCancelarText: {
    fontSize: 15,
    color: '#78909C',
    fontWeight: '500',
  },

  modalBtnConfirmar: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#F0FAF9',
  },

  modalBtnConfirmarText: {
    fontSize: 15,
    color: '#1B5E5A',
    fontWeight: '700',
  },

  successOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  
  successContainer: {
    width: '100%',
    maxWidth: 340,
    paddingVertical: 36,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  
  successIconContainer: {
    marginBottom: 20,
  },

});
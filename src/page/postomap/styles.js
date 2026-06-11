import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },

  // ── Cabeçalho
  header: {
    paddingTop: 54,
    paddingHorizontal: 20,
    paddingBottom: 18,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    zIndex: 10,
    // Sombra abaixo do header
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 16,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backArrow: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  subtitle: {
    color: '#D4F1EF',
    fontSize: 13,
    marginTop: 2,
  },

  // ── Barra de busca
  searchRow: {
    flexDirection: 'row',
    gap: 10,
  },

  searchInput: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 11,
    fontSize: 14,
    color: '#2A3B38',
  },

  searchButton: {
    width: 46,
    height: 46,
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIcon: {
    fontSize: 18,
  },

  // ── Erro
  errorBanner: {
    marginHorizontal: 20,
    marginTop: 14,
    backgroundColor: '#FFEBEE',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#B00020',
  },

  errorText: {
    color: '#B00020',
    fontSize: 13,
    fontWeight: '600',
  },

  // ── Loading
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
  },

  loadingText: {
    color: '#235347',
    fontSize: 15,
    fontWeight: '500',
  },

  // ── Mapa
  map: {
    flex: 1,
  },

  // ── Legenda flutuante
  legend: {
    position: 'absolute',
    bottom: 28,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },

  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  legendLabel: {
    color: '#235347',
    fontSize: 12,
    fontWeight: '600',
  },
});
import { WHATSAPP_NUMBER } from '../config/constants';

/**
 * Gera o link formatado do WhatsApp com a mensagem pré-definida
 * @param {string} message - Mensagem personalizada
 * @returns {string} URL completa para abrir no WhatsApp
 */
export const getWhatsAppUrl = (message = '') => {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
};

/**
 * Função centralizada para abrir o WhatsApp diretamente
 * @param {string} message - Mensagem que será enviada no chat
 */
export const openWhatsApp = (message = '') => {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
};

// Edita aquí los datos reales de la boda. Todo lo que ves entre [corchetes]
// es un placeholder que debes reemplazar antes de publicar la invitación.

export const couple = {
  groom: "Arnoll",
  bride: "Paula",
  initials: "A+P",
};

// Fecha/hora usada por el countdown (formato ISO: "AAAA-MM-DDTHH:mm:ss").
// Mientras no tengas la fecha real, el countdown se queda en 00:00:00:00.
export const countdownDateISO = "[AÑO]-[MES]-[DÍA]T[HORA]:00:00";

export const ceremony = {
  title: "Ceremonia",
  day: "[Día y hora de la ceremonia]",
  place: "[Lugar de la ceremonia]",
  address: "[Dirección de la ceremonia]",
};

export const reception = {
  title: "Recepción",
  day: "[Día y hora de la recepción]",
  place: "[Lugar de la recepción]",
  address: "[Dirección de la recepción]",
};

// Texto introductorio que aparece sobre el countdown.
export const aboutUs = {
  title: "Juntos es nuestro lugar favorito",
  body: "[Agrega aquí un párrafo contando su historia o lo que esta boda significa para ustedes.]",
};

// Palabras de cada uno para la sección "Ella / Él".
export const story = {
  she: "[Escribe aquí unas palabras de Paula sobre su historia de amor.]",
  he: "[Escribe aquí unas palabras de Arnoll sobre su historia de amor.]",
};

// Botón RSVP: abre WhatsApp con este número y este mensaje ya escrito.
// Reemplaza whatsappNumber por el número real con indicativo de país
// (solo dígitos, ej: "573001234567") antes de publicar.
export const rsvp = {
  whatsappNumber: "[número de WhatsApp]",
  message: "¡Hola! Confirmamos nuestra asistencia a la boda de Arnoll y Paula 🎉",
};

export const party = {
  playlistUrl: "", // Pega aquí el link de embed de Spotify cuando lo tengan
  dressCode: {
    body: "[Agrega aquí las indicaciones de código de vestimenta que Arnoll y Paula quieran compartir con sus invitados.]",
  },
  notes: {
    body: "[Agrega aquí información adicional para los invitados: parqueadero, clima, transporte, etc.]",
  },
};

// Si no van a ofrecer transmisión virtual, deja "enabled" en false
// y la sección de videoconferencia no se mostrará.
export const virtual = {
  enabled: false,
  link: "[Link de la videoconferencia]",
  password: "[Contraseña, si aplica]",
};

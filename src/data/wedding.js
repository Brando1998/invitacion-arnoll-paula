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

export const gifts = [
  { id: 1, name: "[Idea de regalo 1]" },
  { id: 2, name: "[Idea de regalo 2]" },
  { id: 3, name: "[Idea de regalo 3]" },
  { id: 4, name: "[Idea de regalo 4]" },
];

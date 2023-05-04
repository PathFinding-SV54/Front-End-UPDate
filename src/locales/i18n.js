import { createI18n } from 'vue-i18n';

export const i18n = createI18n ({
    locale: 'es',
    messages: {
        en: {
            "NewCommunity": 'New Community',
            "Name": 'Name',
            "Enter a name for your community": 'Enter a name for your community',
            "Type a brief description for your community...": 'Type a brief description for your community...',
            "Visibility": 'Visibility',
            "Choose your community's privacy": 'Choose your community\'s privacy',
            "Community Profile Picture": 'Community Profile Picture',
            "Create community": 'Create community',
        },
        es: {
            "NewCommunity": 'Nueva Comunidad',
            "Name": 'Nombre',
            "Enter a name for your community": 'Crea un nombre para tu comunidad',
            "Type a brief description for your community...": 'Escribe una breve descripción de tu comunidad...',
            "Visibility": 'Privacidad',
            "Choose your community's privacy": 'Elige la privacidad de tu comunidad',
            "Community Profile Picture": 'Imagen de la Comunidad',
            "Create community": 'Crear comunidad',
        }
    }
})
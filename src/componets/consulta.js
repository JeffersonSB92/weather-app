import axios from "axios";

const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';
const API_TOKEN = 'ec2d2d215d9d4849a7e04103240105';  // Chave de API

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Função para enviar a requisição POST
export const sendRequest = async (city, days) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&days=${days}`, {
                headers: {
                    'key': API_TOKEN,  // Correção do erro de digitação
                },
            });
        
        if (response.status !== 200) {  // Corrigindo a verificação do status
            throw new Error(`Erro: ${response.status}`);
        }

        const weatherData = response.data;  // Dados obtidos da resposta
        const localtime = weatherData.location.localtime;  // A data/hora local obtida da API

        const date = new Date(localtime);  // Converte a string para um objeto Date
        const options = { weekday: 'long' };  // Configuração para obter o nome completo do dia da semana
        let dayName = new Intl.DateTimeFormat('pt-BR', options).format(date);  // Obtém o dia da semana

        dayName = capitalizeFirstLetter(dayName);

        return { ...weatherData, dayName };
    } catch (error) {
        console.error('Erro ao enviar requisição GET:', error);
        throw error;  // Re-lança o erro para tratar no chamador
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('diagnostic-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const symptoms = document.getElementById('symptoms').value.toLowerCase();
        let diagnosis = '';

        // Mapeamento de sintomas para doenças
        const diseaseSymptoms = {
            'Leptospirose': ['febre alta', 'dor de cabeça', 'sangramentos', 'dor muscular', 'calafrios', 'olhos vermelhos', 'vômitos'],
            'Tétano': ['contrações musculares dolorosas', 'mandíbula', 'pescoço', 'dificuldade para respirar', 'febre', 'pressão alta', 'sudorese'],
            'Diarreia aguda': ['sangramentos nas fezes', 'dores abdominais', 'muco'],
            'Hepatite A': ['fadiga', 'icterícia', 'urina escura', 'fezes claras', 'perda de apetite'],
            'Dengue': ['febre alta', 'dores musculares', 'erupções cutâneas', 'dores nas articulações', 'hemorragia intensa', 'dificuldade para respirar', 'edema', 'rubor', 'dor de cabeça'],
            'Animais peçonhentos': ['lugares úmidos', 'escuros', 'entulhos', 'destroços']
        };

        // Função para verificar se todos os sintomas da doença estão presentes
        const hasAllSymptoms = (disease, symptomsList) => {
            return diseaseSymptoms[disease].every(symptom => {
                const regexp = new RegExp('\\b' + symptom + '\\b', 'i'); // Expressão regular para correspondência de palavra inteira
                return regexp.test(symptomsList);
            });
        };

        // Verificação dos sintomas fornecidos
        let foundDisease = false;
        for (const disease in diseaseSymptoms) {
            if (hasAllSymptoms(disease, symptoms)) {
                diagnosis = `Possível diagnóstico: ${disease}`;
                foundDisease = true;
                break;
            }
        }

        if (!foundDisease) {
            diagnosis = 'Os sintomas fornecidos não correspondem a nenhuma das doenças conhecidas no banco de dados.';
        }

        resultDiv.textContent = diagnosis;
    });
});

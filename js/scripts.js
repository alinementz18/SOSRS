document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('diagnostic-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const symptomsInput = document.getElementById('symptoms').value.toLowerCase();
        const symptomsList = symptomsInput.split(',').map(symptom => symptom.trim()); // Divide os sintomas por vírgula e remove espaços extras

        let diagnosis = '';

        // Mapeamento de sintomas para doenças
        const diseaseSymptoms = {
            'Leptospirose': ['febre alta', 'dor de cabeça', 'sangramentos', 'dor muscular', 'calafrios', 'olhos vermelhos', 'vômitos'],
            'Tétano': ['contrações musculares dolorosas', 'mandíbula', 'pescoço', 'dificuldade para respirar', 'febre', 'pressão alta', 'sudorese'],
            'Diarreia aguda': ['sangramentos nas fezes', 'dores abdominais', 'muco'],
            'Hepatite A': ['fadiga', 'icterícia', 'urina escura', 'fezes claras', 'perda de apetite'],
            'Dengue': ['erupções cutâneas', 'dores nas articulações', 'hemorragia intensa', 'dificuldade para respirar', 'edema', 'rubor', 'dor de cabeça'],
            'Animais peçonhentos': ['dor', 'eritema', 'hematoma', 'bolhas na pele']
        };

        // Função para verificar se pelo menos um sintoma da doença está presente
        const hasAnySymptom = (disease, symptomsList) => {
            return diseaseSymptoms[disease].some(symptom => symptomsList.includes(symptom));
        };

        // Verificação dos sintomas fornecidos
        let foundDisease = false;
        for (const disease in diseaseSymptoms) {
            if (hasAnySymptom(disease, symptomsList)) {
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

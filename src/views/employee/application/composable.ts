import jsPDF from 'jspdf';
import { ref } from 'vue'
export function useApplicationFn() {
    const application = ref<any>({
        to: '',
        from: '',
        dateOn: '',
        dateEnd: ''
    })
    const pdfSrc = ref<any>(null)


    const preferred = ref<string>('bs')
    const options = [
        {
            label: "O'z hisobimdan ta'til",
            value: 'bs'
        },
        {
            label: "Mehnat ta'tili",
            value: 'otpiska'
        },
        {
            label: "Ishdan bo'shash",
            value: 'leave'
        }
    ]



    function generatePdf() {
        const doc = new jsPDF();
        doc.text(`Kimdan: ${application.value.from}`, 80, 10);
        doc.text(`Kimga: ${application.value.to}`, 10, 20);
        doc.text(`Qachondan: ${application.value.dateOn}`, 10, 30);
        doc.text(`Qachongacha: ${application.value.dateEnd}`, 10, 40);

        // Blob yaratish
        const pdfBlob = doc.output('blob');

        // Blobni URL'ga o'zgartirish
        pdfSrc.value = URL.createObjectURL(pdfBlob);
    }

    return {
        application,
        generatePdf,
        pdfSrc,
        preferred,
        options
    }
}
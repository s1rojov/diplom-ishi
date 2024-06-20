import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useEmpStore } from 'src/views/employee/private/store'
import { useAppStore } from './store';
export function useApplicationFn() {
    const empStore = useEmpStore()
    const store = useAppStore()
    const { createApplication } = store
    const { employee }: any = storeToRefs(empStore)
    const { app } = storeToRefs(store)
    const application = ref<any>({
        to: '',
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
    function returnDateFormat(date: any) {
        const newDate = date.split('/')
        return `${newDate[1]}.${newDate[0]}.${newDate[2]}`
    }
    function senApplication() {
        app.value.dateOn = returnDateFormat(application.value.dateOn)
        app.value.app_type = preferred.value
        app.value.dateEnd = returnDateFormat(application.value.dateEnd)
        createApplication()
    }



    function generatePdf() {
        const today = new Date();

        const day = today.getDate();
        const month = today.getMonth() + 1; // Oy 0 dan boshlanadi, shuning uchun 1 qo'shamiz
        const year = today.getFullYear();

        const formattedDate = `${day}/${month}/${year}`;


        const doc = new jsPDF();

        doc.text(`Toshkent temir yo'l texnikumi direktori \n v.b ${application.value.to.split(' ').splice(0, 2).join(' ')}ga \n ${employee.value.department ? employee.value.department : employee.value.division + '\n' + (" bo'linmasi " + employee.value.kafedra.split(' ').splice(0, 2).join(' ')) + '\n ' + (employee.value.kafedra.split(' ').splice(2, (employee.value.kafedra.length - 1)).join(' ') + ' kafedrasi')} \n ${employee.value.position.toLowerCase()}i \n ${employee.value.fullname}dan`, 100, 10);
        doc.text('Ariza', 100, 70);
        doc.text(`Menga oilaviy sharoitim tufayli ${application.value.dateOn}-dan ${application.value.dateEnd}-gacha \no'z hisobimdan ish haqi saqlanmagan holda qisqa muddatli ta'til \nberishingizni so'rayman.`, 30, 80);
        doc.text(`${employee.value.fullname}`, 30, 130);
        doc.text(`${formattedDate}`, 120, 130);
        // doc.text(`${employee.value.fullname}`, 30, 130);

        // Blob yaratish
        // const pdfBlob = doc.output('blob');

        // Blobni URL'ga o'zgartirish
        // pdfSrc.value = URL.createObjectURL(pdfBlob);
        const qrCodeText = `${employee.value.unique_code}`;
        QRCode.toDataURL(qrCodeText, { errorCorrectionLevel: 'H' })
            .then((url: any) => {
                doc.addImage(url, 'PNG', 170, 110, 30, 30);

                // Blob yaratish
                const pdfBlob = doc.output('blob');

                // Blobni URL'ga o'zgartirish
                pdfSrc.value = URL.createObjectURL(pdfBlob);
            })
            .catch((err: any) => {
                console.error(err);
            });
    }

    return {
        application,
        generatePdf,
        pdfSrc,
        preferred,
        options,
        senApplication,
    }
}
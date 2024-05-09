const backUrl = "http://localhost:3000"

export const get_informe = async (data) => {
    console.log("🚀 ~ constget_informe= ~ data:", data)
    try {
        const response = await fetch(backUrl + "/invoice", {
            method: "POST", body: JSON.stringify(data), responseType: 'blob', headers: {
                "Content-Type": "application/json"
            },
        });

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }

        const blob = new Blob([await response.blob()], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;

        const contentDisposition = response.headers['Content-Disposition'];
        let fileName = 'Factura';
        if (contentDisposition) {
            const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
            if (fileNameMatch.length === 2) {
                fileName = fileNameMatch[1];
            }
        }

        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();

        return "ok";
    } catch (e) {
        console.error(e);
        return null;
    }
};
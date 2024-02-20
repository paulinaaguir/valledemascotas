import Swal from "sweetalert2"

export const showSuccessMessage = (message) => {
    Swal.fire({
        icon: "success",
        title: "Listo!",
        text: message,
    })
}

export const showErrorMessage = (message, error = null) => {
    const errorMessage = error != null ? `\n ${error}` : ""
    Swal.fire({
        icon: "error",
        title: "Ooops!",
        text: message + errorMessage
    })
}

export const showQuestionMessage = async (title, message, fnIfPressButton, options = null, fnIfErr = null) => {
    Swal.fire({
        icon: "question",
        title: title,
        text: message,
        confirmButtonText: 'Aceptar!',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        showCloseButton: true,
        ...options
    }).then((userSelection) => {
        fnIfPressButton(userSelection.isConfirmed)
    }).catch((err) => {
        fnIfErr && fnIfErr(err)
        fnIfErr
    })
}

export const showWarnMessage = (message) => {
    Swal.fire({
        icon: "error",
        title: "Cuidado!",
        text: message
    })
}
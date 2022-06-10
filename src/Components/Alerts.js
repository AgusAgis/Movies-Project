import Swal from "sweetalert2"
export function SweetAlrt(title, text, icon) {
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      timer: 4000,
      iconColor: "#ff004c",
      allowOutsideClick: false,
      background: "#001519", //revisar que color es
      backdrop: true,
      confirmButtonColor: "#ff2767",
      
    });
    
  }
  export function SweetAlrtTem(text, icon) {
    Swal.fire({
      text: text,
      timer: 7000,
      timerProgressBar: true,
      icon: icon,
      iconColor: "#ff004c",
      allowOutsideClick: false,
      background: "#001519", //revisar que color es
      backdrop: true,
      showConfirmButton: false,
    });
  }
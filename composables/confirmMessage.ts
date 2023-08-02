import Swal from "sweetalert2";

export function useSwal() {
  const Alert = Swal.mixin({
    allowOutsideClick: false,
    reverseButtons: true,
  });

  const confirmDelete = () => {
    return Alert.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#37d5c4",
      cancelButtonColor: "#e11d48d9",
      confirmButtonText: "Yes, delete it!",
    });
  };

  return { Alert, confirmDelete };
}

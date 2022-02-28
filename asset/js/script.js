function ClickError() {
  Swal.fire({
    icon: 'error',
    title: 'ไม่สามารถเข้าสู่หน้านี้ได้',
    text: 'ขออภัย ไม่สามารถเข้าสู่หน้านี้ได้ โปรดลองใหม่อีกครั้งภายหลัง',
    showConfirmButton: false,
    timer: 2500
  })
}
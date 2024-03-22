function toggleActive(element) {
    // Loại bỏ class "active" từ tất cả các box
    var allBoxes = document.querySelectorAll('.capacity-versions')
    allBoxes.forEach(function (box) {
      box.classList.remove('active')
    })

    // Thêm class "active" vào box được click
    element.classList.add('active')
  }

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var ten = document.getElementById('ten').value;
    var danhGia = document.getElementById('danhGia').value;
    var ngayGio = new Date().toLocaleString('vi-VN');
  
    var danhGiaItem = {
      ten: ten,
      danhGia: danhGia,
      ngayGio: ngayGio
    };
  
    var danhGiaList = document.getElementById('danhGiaList');
    var listItem = document.createElement('li');
  
    var reviewContent = document.createElement('div');
    reviewContent.classList.add('review-content');
    reviewContent.innerHTML = '<strong>' + danhGiaItem.ten + '</strong><br>' +
                              '<span class="review-date">' + danhGiaItem.ngayGio + '</span><br>' +
                              '<span class="review-text">' + danhGiaItem.danhGia + '</span>';
  
    listItem.appendChild(reviewContent);
    danhGiaList.appendChild(listItem);
  
    document.getElementById('reviewForm').reset();
  });
  
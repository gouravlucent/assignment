class Prescription{
  constructor(){
    this.init();
  }
  clickEvents=()=>{
    let SelectLense = document.querySelector(".select-lenses");
    let modalPopUps = document.querySelectorAll(".modal-popup");
    let modalPopUpFirst = document.querySelector(".modal-popup.modal-popup-1");
    let modalPopUpSecond = document.querySelector(".modal-popup.modal-popup-2");
    let modalPopUpThird = document.querySelector(".modal-popup.modal-popup-3");
    let overlay = document.querySelector(".overlay");
    if(SelectLense && modalPopUpFirst){
      SelectLense.addEventListener('click', e=>{
        this.openModalPopUp(modalPopUpFirst);
        overlay.classList.add("active");
      })
    }
    if(modalPopUpSecond){
      let prescriptionType = modalPopUpFirst.querySelectorAll(".prescription-content .text");
      if(prescriptionType.length>0){
        prescriptionType.forEach(item=>{
          item.addEventListener('click', e=>{
            this.openModalPopUp(modalPopUpSecond);
          })
        })
      }
    }
    if(modalPopUpThird){
      let prescriptionType = modalPopUpSecond.querySelectorAll(".prescription-content .text");
      if(prescriptionType.length>0){
        prescriptionType.forEach(item=>{
          item.addEventListener('click', e=>{
            this.openModalPopUp(modalPopUpThird);
          })
        })
      }
    }
    let backBtn = document.querySelectorAll(".prescription-type .arrow-left");
    if(backBtn.length>0){
      backBtn.forEach((item,index)=>{
        item.addEventListener('click', e=>{
          let parent = e.currentTarget.closest(".modal-popup");
          this.closeModalPopUP(parent);
          if(index==0){
            overlay.classList.remove("active");
          }
        })
      })
    }
    let closeBtn = document.querySelectorAll(".prescription-type .close-icon");
    if(closeBtn.length>0){
      closeBtn.forEach(item=>{
        item.addEventListener('click', e=>{
          modalPopUps.forEach(element=>{
            this.closeModalPopUP(element);
            overlay.classList.remove("active");
          })
        })
      })
    }
    overlay.addEventListener('click',e =>{
      modalPopUps.forEach(element=>{
        this.closeModalPopUP(element);
        overlay.classList.remove("active");
      })
    })
  }
  openModalPopUp=(item)=>{
    item.classList.add("active");
  }
  closeModalPopUP=(item)=>{
    item.classList.remove("active");
  }
  init=()=>{
    this.clickEvents();
  }
}
new Prescription;
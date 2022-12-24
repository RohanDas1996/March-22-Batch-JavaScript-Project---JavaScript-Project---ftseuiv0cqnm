function calcy() {

    let a = parseInt(document.getElementById("blamnt").value);
    let b = parseInt(document.getElementById("tppercent").value);
    let p = parseInt(document.getElementById("prsn").value);

    if (a > 1) {
      if (b > 0) {
        if (p > 0) {
          if (b < 101) {
            let c = b / 100;
            let result = (a*c)/2;
            let payable = (result * p) + a;

            document.getElementById("tpamnt").value = result;
            document.getElementById("tpayamnt").value = payable;
          } else {
            alert("Give a proper percentage value");
          }
        } else {
          alert("person's value must be greater than 0");
        }
      } else {
        alert("Give a proper percentage value");
      }
    } else {
      alert("Bill Amount must be Greater");
    }
  }

  function clr() {
    document.getElementById("blamnt").value = "";
    document.getElementById("tppercent").value = "";
    document.getElementById("prsn").value = "";
    document.getElementById("tpamnt").value = "";
    document.getElementById("tpayamnt").value = "";
  }

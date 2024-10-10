/*
let cronometro1 = {
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minute"),
  seconds: document.getElementById("second"),

  tempo() {
    for (let h = 0; h <= 2; h++) {
      for (let o = 0; o <= 9; o++) {
        for (let m = 0; m <= 5; m++) {
          for (let i = 0; i <= 9; i++) {
            for (let s = 0; s <= 5; s++) {
              for (let e = 0; e <= 9; e++) {
                this.hours.innerHTML = `${h}${o}`;
                this.minutes.innerHTML = `${m}${i}`;
                this.seconds.innerHTML = `${s}${e}`;
              }
            }
          }
        }
      }
    }
  },
};

setInterval(cronometro1.tempo(), 1000);
*/

let cronometro = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  updateDisplay() {
    //String(this.hours).padStart (2,'0) = faz que comece com 00
    document.getElementById("hours").innerHTML = String(this.hours).padStart(
      2,
      "0"
    );
    document.getElementById("minute").innerHTML = String(this.minutes).padStart(
      2,
      "0"
    );
    document.getElementById("second").innerHTML = String(this.seconds).padStart(
      2,
      "0"
    );
  },

  start() {
    this.intervalId = setInterval(() => {
      this.seconds++;

      // Verifica se os segundos atingiram 60
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }

      // Verifica se os minutos atingiram 60
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
      }
      document.querySelector("p").style.color = "black";

      // Atualiza a interface gráfica
      this.updateDisplay();
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    document.querySelector("p").style.color = "red";
  },

  reset() {
    document.querySelector("p").style.color = "black";
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.updateDisplay();
  },
};

// Inicia o cronômetro
cronometro.start();

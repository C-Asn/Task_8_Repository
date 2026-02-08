function getScreen(){
      return document.getElementById("screen");
    }

    function appendValue(val){
      const screen = getScreen();
      // If screen shows error, reset
      if (screen.value === "Error") screen.value = "";
      screen.value += val;
    }

    function appendOp(op){
      const screen = getScreen();
      if (screen.value === "" || screen.value === "Error") return;

      const lastChar = screen.value.slice(-1);
      // Prevent multiple operators in a row
      if (['+','-','*','/','.'].includes(lastChar)) return;

      screen.value += op;
    }

    function clearAll(){
      getScreen().value = "";
    }

    function deleteOne(){
      const screen = getScreen();
      if (screen.value === "Error") { screen.value = ""; return; }
      screen.value = screen.value.slice(0, -1);
    }

    function calculateResult(){
      const screen = getScreen();
      if (screen.value === "" || screen.value === "Error") return;

      const lastChar = screen.value.slice(-1);
      if (['+','-','*','/','.'].includes(lastChar)) return;

      try{
        const result = eval(screen.value);
        if (!isFinite(result)) {
          screen.value = "Error";
        } else {
          screen.value = String(result);
        }
      } catch(e){
        screen.value = "Error";
      }
    }
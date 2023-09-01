<script>
  // Variáveis de estado
  let peso = 0; // Peso do usuário
  let altura = 0; // Altura do usuário
  let imc = 0; // Índice de Massa Corporal
  let color = "#ee0979";

  $: onChange(imc);

  const onChange = () => {
    if (imc > 0) {
      if (imc < 18.5) {
        color = "#FF8E15";
      } else if (imc < 24.9) {
        color = "#69B34C";
      } else if (imc < 29.9) {
        color = "#ACB334";
      } else if (imc < 34.9) {
        color = "#FAB733";
      } else if (imc < 39.9) {
        color = "#FF4E11";
      } else {
        color = "#FF0D0D";
      }
    }
  };

  // Função para calcular o IMC
  function calcularIMC() {
    if (peso > 0 && altura > 0) {
      imc = (peso / Math.pow(altura, 2)).toFixed(2);
    } else {
      imc = 0;
    }
  }
</script>

<main>
  <div style={`background-color:${color}`} id="container">
    <h1>Calculadora de IMC</h1>
    <label>
      Peso (kg): <input
        type="number"
        bind:value={peso}
        on:input={calcularIMC}
      />
    </label>
    <label>
      Altura (m): <input
        type="number"
        bind:value={altura}
        on:input={calcularIMC}
      />
    </label>
    <div id="imc-response">
      {#if imc > 0}
        <p>Seu IMC é {imc}</p>

        {#if imc < 18.5}
          <p>IMC abaixo do peso</p>
        {:else if imc < 24.9}
          <p>Peso ideal!</p>
        {:else if imc < 29.9}
          <p>Levemente acima do peso</p>
        {:else if imc < 34.9}
          <p>Obesidade grau 1</p>
        {:else if imc < 39.9}
          <p>Obesidade grau 2</p>
        {:else}
          <p>Obesidade grau 3</p>
        {/if}
      {/if}
    </div>
  </div>
</main>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
    padding: 2rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }

  input {
    padding: 7px 0.25rem !important;
    color: white;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 0px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    font-size: 13px;
    margin-top: 10px;
    border-radius: 2px;
  }

  input:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid white;
    outline-width: 0;
    transition: All 0.5s ease-in;
    -webkit-transition: All 0.5s ease-in;
    -moz-transition: All 0.5s ease-in;
    -o-transition: All 0.5s ease-in;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 20px;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.25rem;
  }

  #container {
    width: 350px;
    height: 370px;
    border-radius: 16px;
    padding: 10px 40px;
  }

  #imc-response {
    margin-top: 24px;
  }
</style>

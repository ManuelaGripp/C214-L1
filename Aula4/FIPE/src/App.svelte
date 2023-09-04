<script>
  import Icon from "@iconify/svelte";
  import axios from "axios";
  import Card from "./Card.svelte";

  let fipeCode;
  let carsList = [];

  const onSubmit = async () => {
    const result = await axios.get(
      `https://brasilapi.com.br/api/fipe/preco/v1/${fipeCode.replace("-", "")}`
    );
    carsList = result.data;
  };
</script>

<main>
  <h2>Insira o código fipe do seu carro</h2>
  <form on:submit|preventDefault={onSubmit}>
    <input type="text" bind:value={fipeCode} />
    <button type="submit"><Icon icon="bi:download" /></button>
  </form>

  <section>
    {#if carsList.length > 0}
      <h2 id='card-container-title' >Modelos disponíveis</h2>
      <div id="card-container">
        {#each carsList as car}
          <Card
            anoModelo={car.anoModelo}
            combustivel={car.combustivel}
            marca={car.marca}
            modelo={car.modelo}
            valor={car.valor}
          />
        {/each}
      </div>
    {/if}
  </section>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@200;300;400;500;600;700;800;900&display=swap");

  main {
    width: 100%;
    padding-top: 20px;
    padding-left: 20px;
    box-sizing: border-box;
    font-family: "Exo 2", sans-serif;
  }
  h2 {
    text-transform: uppercase;
    margin-top: 0px;
    color: #4d8076;
  }

  #card-container {
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap:10px
  }

  #card-container-title{
    margin-top: 10px;
  }

</style>

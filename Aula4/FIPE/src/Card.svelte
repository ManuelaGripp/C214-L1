<script>
    export let modelo;
    export let marca;
    export let anoModelo;
    export let combustivel;
    export let valor;
  </script>
  
  <style>
.card-content{
    background-color: #4d8076;
    border: 3px solid #344B46;
    border-radius: 16px;
    width: 280px;
    height: 300px;
    padding-left: 15px;
    padding-top: 10px;
    color: white ;
}
  </style>
  
  <div class="card-content" >
    <h2>
        {modelo}
    </h2>
    <p>Marca:{marca}</p>
    <p>Ano: {anoModelo}</p>
    <p>Combutível: {combustivel}</p>
  
    <p>{valor}</p>
  </div>
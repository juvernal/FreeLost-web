<template>
  <Header2 />
  <div class="w-100 d-flex mt-5 bg-light flex-row align-content-center justify-content-center">
    <div class="w-75 h-100 bg-white mt-5 border rounded p-3 d-flex flex-column">
      <h1 style="font-size: 40px; position:static"> Declarer un objet </h1>
      <div class="d-flex flex-column mt-5">
        <label class="fw-bold text-black"> Etat</label>
        <div class="d-flex ">
          <button class="btn border rounded bg-grey m-2 w-25"> Perdu</button>
          <button class="btn btn border rounded text-white m-2 w-25"> Trouver</button>
        </div>
      </div>
      <div class="d-flex flex-column mt-5">
        <label class="fw-bold text-black mb-3"> Quoi ??</label>
        <div class="d-flex ">
          <input type="text" class="w-100 p-2 border border-black " style="outline: reset;"
            placeholder="iphone 13 couleur noire gris" />
        </div>
      </div>
      <div class="d-flex flex-column mt-5">
        <label class="fw-bold text-black"> Ou ??</label>
        <div class="d-flex ">
          <input type="text" class="w-100 p-2 border" placeholder="Dschang Keleng Stade-Keleng" />
        </div>
      </div>
      <div class="d-flex flex-column mt-5">
        <label class="fw-bold text-black"> Quand ??</label>
        <div class="d-flex ">
          <button class="btn border rounded bg-light m-2 w-25 text-black"> Aujoud'huit</button>
          <button class="btn btn border rounded bg-success text-white m-2 w-25"> hier</button>
          <button class="btn border rounded bg-light m-2 w-25 text-black"> Avant-hier</button>
          <input type="date" class="border" />
        </div>
      </div>

      <div class="d-flex flex-column mt-5">
        <label class="fw-bold text-black"> Selectioner une Categorie ??</label>
        <div class="d-flex ">
          <select class="w-100 p-2 border">
            <option>Aminaux</option>
            <option>Chien</option>
            <option>Chat</option>
            <option>Reptile</option>
            <option>Effet personelle</option>
            <option>Cles</option>
            <option>Papier d'identite</option>
            <option>Portefeuille</option>
          </select>
        </div>
      </div>

      <div class="d-flex flex-column mt-5">
        <label class="fw-bold text-black"> Description Detailler</label>
        <div class="d-flex ">
          <textarea class="w-100 border" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="d-flex">
          <button class="btn border rounded bg-red m-2 w-25"> Envoyer</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Header2 from "@/components/Header2.vue";

export default {
  components: {
    Header2,
  },
};
</script>

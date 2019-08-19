<template>
  <div class="container">
    <div class="card">
      <h1 class="lead">My Signature</h1>
      <div class="content">
        <span class="desc">Write down your Signature below!</span>
        <VueSignaturePad
          height="300px"
          ref="signaturePad"
          v-bind:customStyle="{
            border: '#696969 1px solid',
            marginBottom: '10px',
            borderRadius: '.25rem',
            minHeight: '300px'
          }"
        />
      </div>
      <div class="actions">
        <div class="left-actions">
          <button @click="clearSignature" class="btn btn-red" style="margin-right: 5px;">Clear</button>
          <button @click="undoSignature" class="btn">Undo</button>
        </div>
        <div class="right-actions">
          <button @click="saveSignature" class="btn btn-green">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  methods: {
    clearSignature() {
      this.$refs.signaturePad.clearSignature();
    },
    undoSignature() {
      this.$refs.signaturePad.undoSignature();
    },
    saveSignature() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();  
      if (!isEmpty) {
        // console.log(data);
        this.downloadSignature(data, 'signature.png');
      }else{
        alert("Please provide a signature first.");
      }
    },
    downloadSignature(dataURL, filename){
      var blob = this.dataURLToBlob(dataURL);
      var url = window.URL.createObjectURL(blob);

      var a = document.createElement("a");
      a.style = "display: none";
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
    },
    dataURLToBlob(dataURL){
      // Code taken from https://github.com/ebidel/filer.js
      var parts = dataURL.split(';base64,');
      var contentType = parts[0].split(":")[1];
      var raw = window.atob(parts[1]);
      var rawLength = raw.length;
      var uInt8Array = new Uint8Array(rawLength);

      for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }

      return new Blob([uInt8Array], { type: contentType });
    }
  },

  mounted: function() {
    this.$nextTick(function () {
      this.$refs.signaturePad.resizeCanvas();
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card{
  background-color: #fff;
  padding: 40px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
  width: 50%;
  border-radius: .25rem;
}

.lead{
  text-align: center;
  font-weight: 400;
  letter-spacing: 3px;
  margin-bottom: 34px;
}

.desc{
  margin-bottom: 10px;
  display: block;
  font-size: 14px;
}

.actions{
  display: flex;
  justify-content: space-between;
}

.btn{
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  background-color: #4299e1;
  color: #fff;
  border-radius: .25rem;
  font-size: 18px;
  padding: 8px 25px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover,
.btn:focus{
  background-color: #2b6cb0;
}

.btn-green{
  background-color: #48bb78;
}

.btn-green:hover,
.btn-green:focus{
  background-color: #2f855a;
}

.btn-red{
  background-color: #f56565;
}

.btn-red:hover,
.btn-red:focus{
  background-color: #c53030;
}

@media screen and (max-width: 768px){
  .container{
    height: 100%;
    padding: 0 16px;
  }

  .card{
    width: 100%;
    margin-top: 40px;
  }
}

@media screen and (max-width: 640px){
  .card{
    padding: 20px;
  }

  .actions{
    flex-direction: column;
  }

  .btn{
    width: 100%;
    margin: 5px 0;
    padding: 14px 0;
  }
}
</style>

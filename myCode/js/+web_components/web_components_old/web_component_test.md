<!-- создание компонента -->

<style type="text/css">
  my-timer:undesoldev { color: red; }
</style>

<script>
// --- Создание элемента ----------------------------------------------------------
  var MyTimerProto = Object.create(HTMLElement.prototype);

// --- Методы элемента -----------------------------------------------------------
  MyTimerProto.one = function() {
    this.innerHTML = "created";
    console.log("Элемент создан / createdCallback");
  }
  MyTimerProto.two = function() {
    this.innerHTML = "attached";
    console.log("Элемент добавлен в документ / attachedCallback");
  }
  MyTimerProto.three = function() {
    this.innerHTML = "attributeChanged";
    console.log("Элемент изменён / attributeChangedCallback");
  }
  MyTimerProto.foo = function() {
    this.innerHTML = "<content></content>detached";
    console.log("Элемент удалён из документа / detachedCallback");
  }
  // --- Жизненный цикл элемента-----------------------------------------------------
  // Жизненный цикл | создание
  MyTimerProto.createdCallback = function() {
    this.one();
  };
  // Жизенный цикл | добавление элемента в документ
  MyTimerProto.attachedCallback = function() {
    this.two();
  };
  // Жизненный цикл | удаление элемента из документа
  MyTimerProto.detachedCallback = function() {
    this.foo();
  }
  // Жизненный цикл | атрибут (добавлен, изменён, удалён)
  MyTimerProto.attributeChangedCallback = function(name, prevValue, newValue) {
    this.three();
    console.log(name, prevValue, newValue);
  }
  // --- Добавление элемента ---------------------------------------------------------
  document.registerElement("my-timer", {
    prototype: MyTimerProto
  });

</script>

<my-timer id="item">0</my-timer>
<!-- /создание компонента -->









<!-- шаблоны и shadow-dom -->
<p id="elem">Title</p>

<template id="tmpl">
  <h3><content></content></h3>
  <p>[template]</p>
  <script>document.write('[script run in template]');</script>
</template>

<script>
  var root = elem.createShadowRoot();
  root.appendChild(tmpl.content.cloneNode(true));
</script>
<!-- /шаблоны и shadow-dom -->




<!-- создание компонента с shadow-dom -->
<style type="text/css">
  #myItem::shadow-root {
    color: green;
  }
</style>
<!-- <my-item id="myItem">[my-item!]</my-item> -->
<div id="myItem">my-item</div>

<script>
  
  var myItemRoot = myItem.createShadowRoot();
  myItemRoot.innerHTML="<h3><content></content>+[shadow-dom]<div></div></h3>";
  
</script>
<!-- /создание компонента с shadow-dom -->
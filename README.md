# Cebra
Cebra aplica un color de fondo a la fila par o impar de una lista o una tabla.

[Demo](http://eldoc.net/jquery/cebra)

### Uso


```
<script type="text/javascript" src="jquery-cebra.js"></script>

<script type="text/javascript">
	$(function(){
		$('#ejemplo-1').cebra();
		$('#ejemplo-2').cebra({
		});
	})
</script>
```

### Opciones


```

	evenColor: color para fila impar. predeterminado '#E8EDFF',
	oddColor: color para fila par. predeterminado '#FFFFFF',
	hoverColor: color al momento de pasar el apuntador sobre una fila. predeterminado '#D0DAFD'


		$('#ejemplo-2').cebra({
			evenColor:'#efefef',
			oddColor:'#a0a0a0'
			hoverColor: '#ff0000'
		});

```

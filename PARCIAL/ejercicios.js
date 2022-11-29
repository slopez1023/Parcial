alert (`Bienvenido al sistema de asignación de turnos`); 

let clientes = [
    tipoCliente = "Cliente de cooperativa",
    tipoCliente = "Cliente externo"
]

for (let i =1; i<= 3; i++);
{
    let cliente = prompt (`Por favor ingrese que tipo de cliente es: 1. Cooperativa, 2. Externo`);
    while (cliente === "Cooperativa") 
    {
        alert (`Ha seleccionado Cooperativa`);

    }

    let atencion = prompt (`Ingrese que tipo de atención necesita: 1. De pago, 2. De asesoría`)
    while (atencion > 0 && atencion <3)
    {
        alert (`Ha seleccionado De pago`);

        switch (atencion){

            case 1: 
                    clasificacionAtencion = `Cuotas`;
                    console.log ("Seleccionó cuotas");

                    break;
        
            case 2:
                    clasificacionAtencion = `Administración`;
                    console.log ("Seleccionó administración")
                    break;
            
            Default: 
                    console.log ("Ha ingresado un a opción incorrecta"); 

    }            
    }


    



    
}

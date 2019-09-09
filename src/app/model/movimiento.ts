import { Cliente } from './cliente';
import { Movimientodetalle } from './movimientodetalle';

export class Movimiento {
    moviConsecutivo: number;
	moviTipo: string;
	moviFechaHora: Date;
	cliente: Cliente;
	moviActivo: boolean;
	movimientoDetalleSet: Movimientodetalle[];

}

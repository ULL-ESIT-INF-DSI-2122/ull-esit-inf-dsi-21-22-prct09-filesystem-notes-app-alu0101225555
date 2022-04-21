//import {TemplateAlgorithm, Individual} from "./templatemethod";

/**
 * Subclase ReduceAlgorithm que implementa las operaciones
 */
/*
export class ReduceAlgorithm extends TemplateAlgorithm {
    constructor(protected mutationRate: number, protected crossoverRate: number, protected maxNumberGenerations: number) {
        super(mutationRate, crossoverRate, maxNumberGenerations);
    }

    /**
     * Implementación de los métodos
     */

    /**
     * initPopulation => suma [1,2]
     */
    /*
    protected initPopulation() {
        console.log('Initialising population');

        /*
        const firstInd = {
            decisionVariables: [1, 2],
            evaluate: () => {},
        };
        */
/*
        const firstInd = [1, 2]
        let i = 0;
        firstInd.forEach((element) => {
            i = i + element;
        })


        console.log(`Suma: ${i}`);
    }

    /**
     * Equivale a multiplicación
     * @param firstIndividual 
     * @param secondIndividual 
     * @param crossoverRate 
     * @returns 
     */
    /*
    protected crossover(firstIndividual: Individual, secondIndividual: Individual, crossoverRate:number): [Individual, Individual] {
        return [firstIndividual, secondIndividual];
    }
    */
   /*
   protected crossover() {

   }
    protected mutation(_: Individual, mutationRate: number) {
        //console.log(`GA: applying mutation with mutation rate ${mutationRate}`);
    }

    protected selectFromParentsAndChildren(_: Individual[]) {
        //console.log(`GA: Selecting survivors for next generation`);
        return this.population;
    }
}*/
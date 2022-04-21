/*
/**
 * Tipo de dato usado
 */
/*
export type Individual = {
    decisionVariables: number[];
    evaluate: () => void;
}

/**
 * Clase abstracta que extiende a la clase Reduce
 */
/*
export abstract class TemplateAlgorithm {
    protected population: Individual[];

    constructor( protected mutationRate: number, protected crossoverRate: number, protected maxNumberGenerations: number) {
        this.population = [];
    }

    /**
     * Esqueleto template method
     */
    /*
    public run() {
        this.initPopulation();
        this.afterInitialisation();
        this.evaluatePopulation();
        this.afterEvaluation();

        let currentNumberGenerations = 0;
        
        while (currentNumberGenerations < this.maxNumberGenerations) {
            const childPopulation = this.generateAndEvaluateChildPopulation();

            /**
             * Hook
             */
            /*
            this.afterChildrenGeneration();

            this.population = this.selectFromParentsAndChildren(childPopulation);

            /**
             * Hook
             */
            /*
            this.afterSurvivorSelection();

            currentNumberGenerations ++;
        }
    }

    /**
     * Operaciones implementadas en el esqueleto
     */
    /*
    protected evaluatePopulation() {
        console.log('Evaluating population');

        this.population.forEach((individual) => {
            individual.evaluate();
        });
    }

    protected generateAndEvaluateChildPopulation() {
        console.log('Generating Children');

        const childPopulation: Individual[] = [];

    this.population.forEach((individual) => {
      const otherIndividual =
        this.population[Math.floor(Math.random() * this.population.length)];

    /*
      const [newIndividual, otherNewIndividual] = this.crossover(individual, otherIndividual, this.crossoverRate);
    */

      //const newIndividual = this.population;
      /*
      const newIndividual = this.crossover
      const otherNewIndividual = this.crossover

      this.mutation(newIndividual, this.mutationRate);
      this.mutation(otherNewIndividual, this.mutationRate);

      newIndividual.evaluate();
      otherNewIndividual.evaluate();

      childPopulation.push(newIndividual, otherNewIndividual);
    });

    return childPopulation;
    }

    /**
     * Operaciones implementadas en las subclase
     
    protected abstract initPopulation(): void;
    protected abstract crossover(): void;
    //protected abstract crossover(firstIndividual: Individual, secondIndividual: Individual, crossoverRate: number): [Individual, Individual];
    protected abstract mutation(individual: Individual,mutationRate: number): void;
    protected abstract selectFromParentsAndChildren(childPopulation: Individual[]): Individual[];

    protected afterInitialisation() {}
    protected afterEvaluation() {}
    protected afterChildrenGeneration() {}
    protected afterSurvivorSelection() {}
    */

//}

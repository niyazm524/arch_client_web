//
//  ViewController.swift
//  patterns
//
//  Created by Адель Хадиев on 01.04.2021.
//

import UIKit

class ViewController: UIViewController {
    
    var exerciseArray = [Exercise]()

    override func viewDidLoad() {
        super.viewDidLoad()
        createExercise(exName: .jumping)
        runExercise()
    }
    
    func createExercise(exName: Exercises) {
        // Singleton usage
        let newExercise = FactoryExercises.defaultFactory.createExercise(name: exName)
        exerciseArray.append(newExercise)
    }
    
    func runExercise() {
        for ex in exerciseArray {
            ex.start()
            ex.stop()
        }
    }
}


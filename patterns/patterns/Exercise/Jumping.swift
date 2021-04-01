//
//  Jumping.swift
//  patterns
//
//  Created by Адель Хадиев on 01.04.2021.
//

import Foundation

class Jumping: Exercise {
    // Использование паттерна Decorator
    var name: String = "Jumping"
    
    var type: String = "Exs for legs"
    
    func start() {
        print("Starting Jumping")
    }
    
    func stop() {
        print("Stoping Jumping")
    }
}

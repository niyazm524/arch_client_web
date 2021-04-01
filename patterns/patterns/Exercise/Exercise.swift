//
//  Exercise.swift
//  patterns
//
//  Created by Адель Хадиев on 01.04.2021.
//

import Foundation

protocol Exercise {
    // Реализация паттерна Decorator и Strategy. Позже мы можем создавать упражнения
    // в отдельных классах, используя этот протокол.
    //
    // Создание протокола упражнения
    var name: String {get}
    var type: String {get}
    
    func start()
    func stop()
}

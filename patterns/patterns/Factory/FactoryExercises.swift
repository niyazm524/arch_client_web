//
//  FactoryExercises.swift
//  patterns
//
//  Created by Адель Хадиев on 01.04.2021.
//

import Foundation

enum Exercises {
    case jumping, squarts
}

class FactoryExercises {
    // Создание фабрики упражнений
    // Для создания нового упражнения создаем новый класс и унаследуем его у упражнений,
    // после чего добавляем его сюда как кейс и в enum.
    static let defaultFactory = FactoryExercises()
    
    func createExercise(name: Exercises) -> Exercise {
        switch name {
            case .squarts: return Squarts()
            case .jumping: return Jumping()
        }
    }
}

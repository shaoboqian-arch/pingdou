import Foundation
import SwiftUI

enum BeanTab: Hashable {
    case home
    case collection
    case stats
    case profile
}

@MainActor
final class BeanDexStore: ObservableObject {
    @Published var selectedTab: BeanTab = .home
    @Published var activeMonth: Date = Calendar.current.startOfMonth(for: .now)
    @Published var works: [BeanWork] = BeanWork.demo
    @Published var nickname: String = "少波"

    var monthWorks: [BeanWork] {
        works
            .filter { Calendar.current.isDate($0.finishedAt, equalTo: activeMonth, toGranularity: .month) }
            .sorted { $0.finishedAt < $1.finishedAt }
    }

    var todayWorks: [BeanWork] {
        works.filter { Calendar.current.isDateInToday($0.finishedAt) }
    }

    var topEnergyWorks: [BeanWork] {
        Array(monthWorks.sorted { $0.energy > $1.energy }.prefix(5))
    }

    var milestoneProgress: Double {
        min(Double(works.count) / 100.0, 1.0)
    }

    func moveMonth(by value: Int) {
        activeMonth = Calendar.current.date(byAdding: .month, value: value, to: activeMonth) ?? activeMonth
    }

    func addImportedWork(imageName: String) {
        let result = EnergyEvaluator.evaluate(
            pieces: 320,
            colorCount: 6,
            shine: .none,
            isLegend: false,
            streakDays: 0
        )

        works.append(
            BeanWork(
                name: "新豆灵",
                finishedAt: .now,
                pieces: 320,
                colorCount: 6,
                energy: result.energy,
                rarity: result.rarity,
                imageName: imageName,
                cutoutImageName: imageName
            )
        )
    }
}

extension Calendar {
    func startOfMonth(for date: Date) -> Date {
        dateInterval(of: .month, for: date)?.start ?? date
    }
}

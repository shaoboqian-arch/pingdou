import Foundation

struct EnergyResult: Equatable {
    let energy: Int
    let rarity: BeanRarity
}

enum EnergyEvaluator {
    static func evaluate(
        pieces: Int,
        colorCount: Int,
        shine: BeanShine,
        isLegend: Bool,
        streakDays: Int
    ) -> EnergyResult {
        let base = 900
        let pieceScore = pieces * 7
        let colorScore = min(colorCount, 12) * 130
        let shineScore: Int = {
            switch shine {
            case .none: return 0
            case .blue: return 550
            case .purple: return 950
            case .gold: return 1500
            }
        }()
        let legendScore = isLegend ? 1400 : 0
        let streakScore = min(streakDays, 14) * 65
        let energy = base + pieceScore + colorScore + shineScore + legendScore + streakScore

        return EnergyResult(
            energy: energy,
            rarity: rarity(for: energy, isLegend: isLegend)
        )
    }

    private static func rarity(for energy: Int, isLegend: Bool) -> BeanRarity {
        if isLegend || energy >= 7600 { return .legendary }
        if energy >= 5600 { return .epic }
        if energy >= 3600 { return .rare }
        if energy >= 2400 { return .good }
        return .normal
    }
}

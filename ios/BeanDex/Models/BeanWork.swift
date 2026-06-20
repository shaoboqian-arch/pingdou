import Foundation

enum BeanRarity: String, CaseIterable, Codable, Identifiable {
    case normal = "普通"
    case good = "优秀"
    case rare = "稀有"
    case epic = "史诗"
    case legendary = "传说"

    var id: String { rawValue }
}

enum BeanShine: String, CaseIterable, Codable, Identifiable {
    case none = "无光"
    case blue = "蓝闪"
    case purple = "紫闪"
    case gold = "金闪"

    var id: String { rawValue }
}

struct BeanWork: Identifiable, Codable, Equatable {
    var id: UUID
    var name: String
    var finishedAt: Date
    var pieces: Int
    var colorCount: Int
    var energy: Int
    var rarity: BeanRarity
    var shine: BeanShine
    var isLegend: Bool
    var likes: Int
    var imageName: String
    var cutoutImageName: String

    init(
        id: UUID = UUID(),
        name: String,
        finishedAt: Date,
        pieces: Int,
        colorCount: Int,
        energy: Int,
        rarity: BeanRarity,
        shine: BeanShine = .none,
        isLegend: Bool = false,
        likes: Int = 0,
        imageName: String,
        cutoutImageName: String
    ) {
        self.id = id
        self.name = name
        self.finishedAt = finishedAt
        self.pieces = pieces
        self.colorCount = colorCount
        self.energy = energy
        self.rarity = rarity
        self.shine = shine
        self.isLegend = isLegend
        self.likes = likes
        self.imageName = imageName
        self.cutoutImageName = cutoutImageName
    }
}

extension BeanWork {
    static let demo: [BeanWork] = [
        .init(
            name: "草莓布丁喵",
            finishedAt: DateComponents(calendar: .current, year: 2025, month: 5, day: 20).date ?? .now,
            pieces: 520,
            colorCount: 8,
            energy: 8650,
            rarity: .legendary,
            shine: .gold,
            isLegend: true,
            likes: 23,
            imageName: "cat-real-scene",
            cutoutImageName: "cat-clean-cutout"
        ),
        .init(
            name: "豆豆龙",
            finishedAt: DateComponents(calendar: .current, year: 2025, month: 5, day: 26).date ?? .now,
            pieces: 430,
            colorCount: 7,
            energy: 6420,
            rarity: .epic,
            shine: .purple,
            likes: 18,
            imageName: "dragon-real-scene",
            cutoutImageName: "dragon-clean-cutout"
        ),
        .init(
            name: "蓝企鹅",
            finishedAt: DateComponents(calendar: .current, year: 2025, month: 5, day: 9).date ?? .now,
            pieces: 280,
            colorCount: 5,
            energy: 3650,
            rarity: .rare,
            shine: .blue,
            likes: 12,
            imageName: "penguin-real-scene",
            cutoutImageName: "penguin-clean-cutout"
        )
    ]
}

import SwiftUI

struct FeaturedPhotoCard: View {
    let work: BeanWork

    var body: some View {
        ZStack(alignment: .bottomLeading) {
            BeanImage(name: work.imageName)
                .frame(height: 220)
                .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))

            VStack(alignment: .leading, spacing: 4) {
                Text(work.name)
                    .font(.headline)
                Text(work.finishedAt.formatted(.dateTime.year().month().day()))
                    .foregroundStyle(.secondary)
            }
            .padding(16)
        }
    }
}

struct MonthCalendarView: View {
    let works: [BeanWork]
    let activeMonth: Date

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text(activeMonth.formatted(.dateTime.year().month()))
                .font(.title3.weight(.bold))

            LazyVGrid(columns: Array(repeating: GridItem(.flexible(), spacing: 8), count: 7), spacing: 12) {
                ForEach(1...31, id: \.self) { day in
                    CalendarDayCell(day: day, works: worksFor(day))
                }
            }
        }
    }

    private func worksFor(_ day: Int) -> [BeanWork] {
        works.filter { Calendar.current.component(.day, from: $0.finishedAt) == day }
    }
}

struct CalendarDayCell: View {
    let day: Int
    let works: [BeanWork]

    var body: some View {
        VStack(spacing: 4) {
            Text("\(day)")
                .font(.callout.weight(works.isEmpty ? .regular : .bold))

            ZStack {
                ForEach(Array(works.prefix(3).enumerated()), id: \.element.id) { index, work in
                    BeanImage(name: work.cutoutImageName)
                        .frame(width: 28, height: 28)
                        .offset(x: CGFloat(index) * 8 - CGFloat(works.prefix(3).count - 1) * 4)
                }
            }
            .frame(height: 30)
        }
        .frame(minHeight: 56)
    }
}

struct SpiritIntroCard: View {
    let work: BeanWork

    var body: some View {
        HStack(spacing: 16) {
            BeanImage(name: work.cutoutImageName)
                .frame(width: 132, height: 132)
                .padding(8)
                .background(.white)
                .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))

            VStack(alignment: .leading, spacing: 8) {
                Text(work.name)
                    .font(.title3.weight(.bold))

                HStack {
                    RarityPill(text: work.rarity.rawValue)
                    if work.shine != .none {
                        RarityPill(text: work.shine.rawValue)
                    }
                }

                Text("能量值")
                    .font(.caption)
                    .foregroundStyle(.secondary)

                Text(work.energy.formatted())
                    .font(.title.weight(.bold))
            }

            Spacer()
        }
        .padding(16)
        .background(Color(.secondarySystemBackground))
        .clipShape(RoundedRectangle(cornerRadius: 22, style: .continuous))
    }
}

struct CollectionWorkCard: View {
    let work: BeanWork

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            BeanImage(name: work.cutoutImageName)
                .frame(height: 120)

            Text(work.name)
                .font(.headline)

            Text("\(work.energy) 能量值")
                .font(.caption)
                .foregroundStyle(.secondary)
        }
        .padding(12)
        .background(Color(.secondarySystemBackground))
        .clipShape(RoundedRectangle(cornerRadius: 16, style: .continuous))
    }
}

struct TopEnergyRow: View {
    let work: BeanWork

    var body: some View {
        HStack {
            BeanImage(name: work.cutoutImageName)
                .frame(width: 42, height: 42)

            Text(work.name)
                .font(.subheadline.weight(.semibold))

            Spacer()

            Text(work.energy.formatted())
                .font(.headline)
        }
    }
}

struct MetricRow: View {
    let title: String
    let value: String

    var body: some View {
        HStack {
            Text(title)
            Spacer()
            Text(value)
                .font(.headline)
        }
    }
}

struct BeanImage: View {
    let name: String

    var body: some View {
        Image(name)
            .resizable()
            .scaledToFit()
            .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}

struct RarityPill: View {
    let text: String

    var body: some View {
        Text(text)
            .font(.caption.weight(.semibold))
            .padding(.horizontal, 8)
            .padding(.vertical, 4)
            .background(Color(.tertiarySystemFill))
            .clipShape(Capsule())
    }
}

struct ChipButtonStyle: ButtonStyle {
    let isSelected: Bool

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.callout.weight(.semibold))
            .padding(.horizontal, 14)
            .padding(.vertical, 8)
            .foregroundStyle(isSelected ? .white : .primary)
            .background(isSelected ? Color.black : Color(.secondarySystemBackground))
            .clipShape(Capsule())
            .opacity(configuration.isPressed ? 0.7 : 1)
    }
}

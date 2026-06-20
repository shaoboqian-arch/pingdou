import SwiftUI

struct StatsView: View {
    @EnvironmentObject private var store: BeanDexStore

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 18) {
                monthSwitcher

                MetricRow(title: "本月完成", value: "\(store.monthWorks.count) 件")
                MetricRow(title: "100 件里程碑", value: "\(Int(store.milestoneProgress * 100))%")

                ProgressView(value: store.milestoneProgress)
                    .tint(.black)

                Text("本月能量值前五")
                    .font(.headline)

                VStack(spacing: 12) {
                    ForEach(store.topEnergyWorks) { work in
                        TopEnergyRow(work: work)
                    }
                }
            }
            .padding(20)
        }
        .navigationTitle("统计")
    }

    private var monthSwitcher: some View {
        HStack {
            Button(action: { store.moveMonth(by: -1) }) {
                Image(systemName: "chevron.left")
            }

            Text(store.activeMonth.formatted(.dateTime.year().month()))
                .font(.title3.weight(.bold))

            Button(action: { store.moveMonth(by: 1) }) {
                Image(systemName: "chevron.right")
            }

            Spacer()
        }
        .buttonStyle(.bordered)
    }
}

import SwiftUI

struct CollectionView: View {
    @EnvironmentObject private var store: BeanDexStore
    @State private var selectedShine: BeanShine?

    private var filteredWorks: [BeanWork] {
        guard let selectedShine else { return store.works }
        return store.works.filter { $0.shine == selectedShine }
    }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 16) {
                FilterChips(selectedShine: $selectedShine)

                LazyVGrid(columns: [GridItem(.adaptive(minimum: 150), spacing: 14)], spacing: 14) {
                    ForEach(filteredWorks) { work in
                        CollectionWorkCard(work: work)
                    }
                }
            }
            .padding(20)
        }
        .navigationTitle("收藏")
    }
}

private struct FilterChips: View {
    @Binding var selectedShine: BeanShine?

    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 10) {
                Button("全部") { selectedShine = nil }
                    .buttonStyle(ChipButtonStyle(isSelected: selectedShine == nil))

                ForEach(BeanShine.allCases) { shine in
                    Button(shine.rawValue) { selectedShine = shine }
                        .buttonStyle(ChipButtonStyle(isSelected: selectedShine == shine))
                }
            }
        }
    }
}

import PhotosUI
import SwiftUI

struct HomeView: View {
    @EnvironmentObject private var store: BeanDexStore
    @State private var selectedItem: PhotosPickerItem?
    @State private var featuredIndex = 0
    private let importer = PhotoImportService()

    var featuredWork: BeanWork? {
        store.monthWorks.isEmpty ? store.works.first : store.monthWorks[min(featuredIndex, store.monthWorks.count - 1)]
    }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 18) {
                header

                if let featuredWork {
                    FeaturedPhotoCard(work: featuredWork)
                }

                MonthCalendarView(works: store.monthWorks, activeMonth: store.activeMonth)

                if let featuredWork {
                    SpiritIntroCard(work: featuredWork)
                }
            }
            .padding(.horizontal, 20)
            .padding(.bottom, 28)
        }
        .navigationTitle("BeanDex")
        .toolbar {
            ToolbarItemGroup(placement: .topBarTrailing) {
                Button(action: {}) {
                    Image(systemName: "magnifyingglass")
                }
                Button(action: {}) {
                    Image(systemName: "bell")
                }
            }
        }
    }

    private var header: some View {
        HStack {
            Text("今日完成")
                .font(.title2.weight(.bold))

            Spacer()

            PhotosPicker(selection: $selectedItem, matching: .images) {
                Label("上传", systemImage: "plus")
                    .font(.callout.weight(.semibold))
            }
            .onChange(of: selectedItem) { _, item in
                Task {
                    _ = try? await importer.loadImageData(from: item)
                    store.addImportedWork(imageName: "uploaded-work")
                }
            }
        }
    }
}

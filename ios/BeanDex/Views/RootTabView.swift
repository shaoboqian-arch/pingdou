import SwiftUI

struct RootTabView: View {
    @EnvironmentObject private var store: BeanDexStore

    var body: some View {
        TabView(selection: $store.selectedTab) {
            NavigationStack {
                HomeView()
            }
            .tabItem {
                Label("首页", systemImage: "house.fill")
            }
            .tag(BeanTab.home)

            NavigationStack {
                CollectionView()
            }
            .tabItem {
                Label("收藏", systemImage: "square.grid.2x2.fill")
            }
            .tag(BeanTab.collection)

            NavigationStack {
                StatsView()
            }
            .tabItem {
                Label("统计", systemImage: "chart.bar.xaxis")
            }
            .tag(BeanTab.stats)

            NavigationStack {
                ProfileView()
            }
            .tabItem {
                Label("我的", systemImage: "person.crop.circle")
            }
            .tag(BeanTab.profile)
        }
        .tint(.black)
    }
}

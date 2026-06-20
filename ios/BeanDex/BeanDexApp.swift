import SwiftUI

@main
struct BeanDexApp: App {
    @StateObject private var store = BeanDexStore()

    var body: some Scene {
        WindowGroup {
            RootTabView()
                .environmentObject(store)
        }
    }
}

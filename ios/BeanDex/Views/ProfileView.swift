import SwiftUI

struct ProfileView: View {
    @EnvironmentObject private var store: BeanDexStore

    var body: some View {
        Form {
            Section("资料") {
                TextField("昵称", text: $store.nickname)
                Button("更换头像") {}
            }

            Section("设定") {
                LabeledContent("能量值", value: "作品规模、配色、连续完成、闪光与传说加成")
                LabeledContent("闪光", value: "蓝闪、紫闪、金闪")
                LabeledContent("稀有度", value: "普通、优秀、稀有、史诗、传说")
                LabeledContent("传说", value: "彩框与扫光，不等同于闪光")
            }
        }
        .navigationTitle("我的")
    }
}

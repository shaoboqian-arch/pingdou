# BeanDex iOS

这是 BeanDex 的 iOS 原生工程源代码骨架，当前 Web 原型只作为视觉和交互参考。

## 工程标准

- UI 框架：SwiftUI
- 导航：TabView + NavigationStack
- 状态：ObservableObject Store
- 照片入口：PhotosUI / PhotosPicker
- 本地模型：Codable + Identifiable
- 业务命名：统一使用“能量值”

## macOS 建壳步骤

1. 用 Xcode 新建 iOS App。
2. Product Name 填 `BeanDex`。
3. Interface 选 `SwiftUI`。
4. Language 选 `Swift`。
5. 将本目录下的 `Models`、`ViewModels`、`Views`、`Services`、`Resources` 加入工程。
6. 用本目录的 `BeanDexApp.swift` 替换 Xcode 默认入口。

## 当前边界

Windows 环境不能运行 Xcode 编译，本目录先落 iOS 标准源码结构。

import Foundation
import PhotosUI
import SwiftUI

@MainActor
final class PhotoImportService {
    func loadImageData(from item: PhotosPickerItem?) async throws -> Data? {
        guard let item else { return nil }
        return try await item.loadTransferable(type: Data.self)
    }
}

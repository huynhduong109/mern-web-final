import React, { useState } from 'react';

const Policy = () => {
    const policies = [
        {
            id: 1,
            title: 'Chính sách đổi trả',
            content: (
                <div>
                    <h2>Nội dung chính sách đổi trả:</h2>
                    <div>
                        <p className="font-bold">1. Điều kiện áp dụng</p>
                        <p>
                            Theo các điều khoản và điều kiện được quy định trong Chính sách Trả hàng và Hoàn tiền này và tạo thành một phần của Điều khoản dịch vụ, FourD đảm bảo quyền lợi của Người mua bằng cách cho phép gửi yêu cầu hoàn trả sản phẩm và/hoặc hoàn tiền trước khi hết hạn. Thời hạn FourD Đảm Bảo đã được quy định trong Điều khoản Dịch vụ.
                            FourD Đảm bảo thực hiện bởi FourD, theo yêu cầu của Người dùng, để hỗ trợ Người dùng trong việc giải quyết các xung đột có thể phát sinh trong quá trình giao dịch. Người dùng có thể liên hệ với nhau để thỏa thuận về việc giải quyết tranh chấp của họ hoặc báo cáo lên FourD hoặc cơ quan nhà nước có thẩm quyền để được hỗ trợ trong việc giải quyết bất kỳ tranh chấp xảy ra trước, trong hoặc sau khi sử dụng FourD Đảm bảo.
                        </p>
                        <p className="font-bold">2. Điều kiện yêu cầu trả hàng/hoàn tiền</p>
                        <p>
                            Người mua đồng ý rằng cô ấy/anh ấy chỉ có thể yêu cầu trả hàng/hoàn tiền trong các trường hợp sau:
                        </p>
                        <ol>
                            <li>Người mua đã thanh toán nhưng (i) không nhận được sản phẩm, hoặc (ii) không nhận được toàn bộ các sản phẩm đã đặt, hoặc (iii) nhận được sản phẩm là hàng giả, hàng nhái;</li>
                            <li>Sản phẩm bị lỗi hoặc bị hư hại trong quá trình vận chuyển;</li>
                            <li>Người bán giao sai sản phẩm cho Người mua (ví dụ: sai kích cỡ, sai màu sắc, v.vv...);</li>
                            <li>Sản phẩm Người mua nhận được khác biệt một cách rõ rệt so với thông tin mà Người bán cung cấp trong mục mô tả sản phẩm;</li>
                            <li>Sản phẩm bị trả lại không phải là Sản phẩm hạn chế trả hàng;</li>
                            <li>Người bán đã tự thỏa thuận và đồng ý cho Người mua trả hàng (tuy nhiên FourD sẽ cần Người bán xác nhận lại những thỏa thuận này).</li>
                        </ol>
                        <p>
                            Người mua có thể gửi yêu cầu trả hàng/hoàn tiền trong vòng 07 (bảy) ngày (đối với các sản phẩm thuộc FourD) và 03 (ba) ngày (đối với các sản phẩm không thuộc FourD) kể từ lúc đơn hàng được cập nhật giao hàng thành công. Riêng đối với các sản phẩm thực phẩm tươi sống và đông lạnh (trừ trường hợp chưa nhận được hàng), Người mua cần gửi yêu cầu trả hàng/hoàn tiền trong vòng 24 giờ kể từ lúc đơn hàng được cập nhật giao hàng thành công.
                        </p>
                        <p className="font-bold">3. Không thay đổi ý định mua hàng</p>
                        <p>
                            Trừ khi được đề cập trong Chính sách Trả hàng và Hoàn tiền này, các trường hợp trả hàng do Người mua thay đổi ý định mua hàng sẽ không được chấp nhận.
                        </p>
                        <p className="font-bold">4. Quyền lợi của Người bán</p>
                        <p>
                            Khi nhận được yêu cầu trả hàng và/hoặc hoàn tiền từ phía Người mua, FourD sẽ xem xét và quyết định cho Người mua được trả hàng/hoàn tiền, đồng thời thông báo (i) về yêu cầu trả hàng/hoàn tiền của Người mua hoặc (ii) quyết định xử lý yêu cầu Trả hàng/hoàn tiền của FourD cho Người bán trên Ứng dụng và/hoặc thư điện tử và/hoặc tin nhắn điện thoại. Người bán cần gửi phản hồi trong vòng 02 ngày lịch (hoặc thời hạn khác được quy định bởi FourD trong từng thời điểm) kể từ ngày nhận được thông báo của FourD nếu không đồng ý với quyết định hoàn tiền của FourD hoặc chưa nhận được hàng trả về/hàng trả về không thuộc các trường hợp mà Người mua được hoàn hàng/trả tiền hoặc hàng bị hư hỏng, mất mát trong quá trình hàng được hoàn trả. Sau thời gian này mà FourD không nhận được bất cứ phản hồi nào từ Người bán, FourD hiểu rằng Người bán hoàn toàn đồng ý với quyết định xử lý của FourD và không có khiếu nại. Việc hoàn tiền cho người mua có thể được FourD cân nhắc thực hiện mà không cần Người mua phải hoàn trả hàng cho Người bán.
                        </p>
                        <p className="font-bold">5. Chi phí trả hàng</p>
                        <p>
                            Người mua có thể lựa chọn trả hàng:
                            Theo hình thức “Lấy hàng hoàn trả tại nhà” hoặc “Gửi trả hàng tại bưu cục”: Người mua không phải thanh toán bất cứ khoản phí vận chuyển nào cho việc trả hàng.
                            Theo hình thức “Tự sắp xếp”: Người mua cần thanh toán trước chi phí vận chuyển cho việc trả hàng. FourD sẽ hỗ trợ hoàn lại một phần phí trả hàng dưới hình thức FourD Xu theo chính sách của FourD khi Người mua đáp ứng được các điều kiện để được hỗ trợ trong thời hạn 3-5 ngày làm việc kể từ ngày Người mua đã gửi trả hàng cho đơn vị vận chuyển và yêu cầu trả hàng/hoàn tiền của Người mua được chấp nhận.

                        </p>

                        <p className="font-bold">6. Liên lạc giữa Người bán và Người mua</p>
                        <p>
                            FourD khuyến khích Người mua chủ động liên hệ với Người bán để thương lượng và giải quyết với nhau thông qua các kênh liên lạc được cung cấp trên hệ thống FourD khi có bất cứ vấn đề nào phát sinh trong giao dịch...
                        </p>
                        <p className="font-bold" >Bản Cập Nhật ngày 28/07/2023.</p>
                        Phiên bản này có hiệu lực vào ngày 28/07/2023.
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            title: 'Chính sách bảo hành',
            content: (
                <div>
                    <p className="font-bold">Nội dung chính sách bảo hành:</p>
                    <p>
                        Bảo hành sản phẩm trong vòng 1 năm kể từ ngày mua. Để yêu cầu bảo hành, vui lòng gọi điện
                        thoại đến số <strong>0965-686-542</strong> và cung cấp số đơn hàng cùng với thông tin chi tiết về sự cố.
                    </p>
                </div>
            ),
        },
        {
            id: 3,
            title: 'Chính sách vận chuyển',
            content: (
                <div>
                    <h2>Nội dung chính sách vận chuyển:</h2>
                    <div>
                        <p className="font-bold">A. QUY ĐỊNH VỀ HÀNG HÓA KHÔNG HỖ TRỢ VẬN CHUYỂN, VẬN CHUYỂN CÓ ĐIỀU KIỆN</p>
                        <p>
                            <b>1. Quy định về các loại hàng hóa không hỗ trợ vận chuyển trên FourD</b>
                        </p>
                        <p>
                            1.1. Các loại hàng hóa không hỗ trợ vận chuyển trên FourD bao gồm nhưng không giới hạn các loại hàng hóa sau:
                        </p>
                        <ol>
                            <li>a. Hàng hóa thuộc danh mục cấm giao dịch trên FourD. Xem chi tiết tại TẠI ĐÂY;</li>
                            <li>b. Các vật phẩm làm bằng vàng, bạc, đá quý hoặc các loại kim khí quý khác;</li>
                            <li>c. Hóa chất tẩy rửa đậm đặc, dung dịch/ bột dùng pha chế sản xuất công nghiệp;</li>
                            <li>d. Đơn hàng có giá trị hàng hóa lớn hơn 50.000.000VNĐ (Tổng giá trị hàng hóa với giá khuyến mãi nếu có, không bao gồm mã giảm giá của FourD, mã giảm giá của Người Bán, xu và phí vận chuyển);</li>
                            <li>e. Đơn hàng có dấu hiệu gian lận, lợi dụng các Chính Sách, hỗ trợ của FourD;</li>
                            <li>f. Người Mua/ Người Bán không tuân theo các hướng dẫn, quy định và khuyến cáo về vận chuyển của FourD được nêu ra trong Chính Sách Vận Chuyển;</li>
                            <li>g. Người dùng vi phạm các Tiêu chuẩn cộng đồng của FourD. Tham khảo Tiêu chuẩn cộng đồng TẠI ĐÂY;</li>
                            <li>h. Các đơn hàng vi phạm về số lượng và giá trị mua hàng giới hạn theo từng chương trình khuyến mại. Nội dung chi tiết sẽ được thông báo theo từng chương trình;</li>
                            <li>i. Hàng hóa không có đầy đủ hóa đơn, chứng từ chứng minh nguồn gốc, xuất xứ hàng hóa theo quy định của pháp luật;</li>
                            <li>j. Các loại hàng hóa không hỗ trợ vận chuyển khác theo thông báo của FourD trong từng thời điểm.</li>
                        </ol>
                        <p>
                            1.2. Miễn trừ trách nhiệm cho FourD và các bên có liên quan: Với các mặt hàng thuộc danh mục FourD không hỗ trợ vận chuyển kể trên, FourD cũng như các bên có liên quan trong quá trình vận chuyển hàng hóa sẽ không chịu trách nhiệm nếu hàng hóa bị thu giữ, tiêu hủy hay hư hỏng trong quá trình vận chuyển. Người Bán chịu hoàn toàn trách nhiệm trước FourD và pháp luật (nếu có) khi gửi hàng vi phạm Chính Sách Vận Chuyển của FourD và pháp luật Việt Nam.
                        </p>
                        <p>
                            1.3. Trong trường hợp Người Bán cố tình vi phạm các quy định về hàng hóa không hỗ trợ vận chuyển trên Sàn FourD, Người Bán phải bồi thường đầy đủ và toàn bộ các thiệt hại phát sinh mà FourD và/hoặc các bên có liên Quan trong quá trình vận chuyển phải gánh chịu.
                        </p>
                        <p className="font-bold">B. QUY ĐỊNH VỀ ĐÓNG GÓI HÀNG HÓA</p>
                        <p>
                            Trước khi vận chuyển, Người Bán phải đảm bảo hàng hóa đã sẵn sàng để được vận chuyển với quãng đường tương ứng với từng đơn hàng. Cụ thể như sau:
                        </p>
                        <p className="font-bold">1. Yêu cầu chung</p>
                        <p>
                            a. Tất cả các bưu kiện đều phải được đóng gói sẵn sàng, được niêm phong bởi Người Bán  trước khi vận chuyển. Người Bán hoàn toàn chịu trách nhiệm đóng gói sản phẩm của mình đúng quy định khi giao hàng cho đơn vị vận chuyển. Xem chi tiết Quy định đóng gói TẠI ĐÂY.
                        </p>
                        <p>
                            b. Trường hợp hàng hóa không đóng gói đúng quy định tại mục a nêu trên: đơn vị vận chuyển có quyền từ chối nhận hàng.
                        </p><p>
                            c. Trường hợp hàng hóa không đóng gói đúng quy định nhưng được bàn giao thành công cho đơn vị vận chuyển: Bưu kiện sẽ được đơn vị vận chuyển chuyển hoàn hoặc tiêu hủy (trong trường hợp xấu nhất) nếu xảy ra hư hỏng/ bể vỡ và không thể tiếp tục giao đến cho Người Mua. Người Bán sẽ chịu mọi trách nhiệm trong trường hợp này bao gồm cả nghĩa vụ bồi thường mọi thiệt hại mà FourD và/hoặc các bên có liên quan trong quá trình vận chuyển phải gánh chịu.
                        </p>
                        <p>
                            d. Trên bao bì tất cả các bưu kiện đều phải có thông tin và Người Bán phải đảm bảo các thông tin liên quan đến Người Bán và Người Mua, hàng hóa mà Người Bán cung cấp là chính xác và trung thực.
                        </p>

                    </div>
                    <p className="ml-4">
                        Để xem thông tin vận chuyển chi tiết, vui lòng truy cập vào <a href="/shipping-info">trang thông tin vận chuyển</a>.
                    </p>
                </div>
            ),
        },
    ];

    const [activePolicy, setActivePolicy] = useState(policies[0]);

    const handlePolicyClick = (policy) => {
        setActivePolicy(policy);
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Chính sách</h2>
            <div className="flex">
                <div className="w-1/4">
                    <ul className="space-y-4">
                        {policies.map((policy) => (
                            <li
                                key={policy.id}
                                className={`cursor-pointer ${policy.id === activePolicy.id ? 'text-blue-500' : 'text-gray-900'
                                    }`}
                                onClick={() => handlePolicyClick(policy)}
                            >
                                {policy.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-3/4 pl-8">
                    <h3 className="text-2xl font-bold mb-4">{activePolicy.title}</h3>
                    <div className="text-base text-gray-500">{activePolicy.content}</div>
                </div>
            </div>
        </div>
    );
};

export default Policy;

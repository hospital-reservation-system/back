import HttpException from '@/api/common/exceptions/http.exception';
import mongoose from "mongoose";
import { OrderRepository } from '@/api/order/repository/order.repository';
import { AdminRepository } from '@/api/admin/repository/admin.repository';
import { OrderService } from '@/api/order/service/order.service.type';
import { OrderResponseDTO } from '@/api/order/dto/orderResponse.dto';
import { GetOrderResponseDTO } from '@/api/order/dto/getOrderResponse.dto';
import { GetOrdersResponseDTO } from '@/api/order/dto/getOrdersResponse.dto';

export class OrderServiceImpl implements OrderService {
    constructor(
        private readonly _orderRepository: OrderRepository,
        private readonly _adminRepository: AdminRepository
    ) {}

    async createOrder(hospitalId: string, order: Omit<IOrder, "id">): Promise<OrderResponseDTO> {

        const hospital = await this._adminRepository.findById(hospitalId);

            if(!hospital) {
                throw new HttpException(404, "입력한 병원이 없습니다.");
            }

            const newOrder: IOrder = {
                id:"",
                hospitalId: hospital.id,
                user_name: order.user_name,
                user_tell: order.user_tell,
                user_birth: order.user_birth,
                user_address: order.user_address,
                user_gender: order.user_gender,
                user_email: order.user_email,
                total_price: order.total_price,
                memo: order.memo,
                reservation_date: order.reservation_date,
                reservation_time: order.reservation_time,
                status: "pending"
            }

            const savedOrder = await this._orderRepository.createOrder(newOrder);

            const updatedOrder = hospital.order ? hospital.order.concat(savedOrder) : [savedOrder];

            await this._adminRepository.updateAdmin(hospital.id, {
                order: updatedOrder,
            });

            return new OrderResponseDTO(savedOrder);

    }    

    async getOrders(): Promise<GetOrdersResponseDTO[]> {
        const orders = await this._orderRepository.findAll();

        const newList = await Promise.all(
            orders.map((order)=>new GetOrdersResponseDTO(order))
        );

        return newList;
    }

    async getOrder(orderId: string): Promise<GetOrderResponseDTO | null> {
        const order = await this._orderRepository.findById(orderId);

        if(!order) {
            throw new HttpException(404, "예약 정보 조회 실패");
        }

        const orderList = await new GetOrderResponseDTO(order);

        return orderList;
    }

    async updateOrder(orderId: string, params: Partial<Omit<IOrder, "id">>): Promise<void> {
        const findOrder = await this._orderRepository.findById(orderId);
        
        if(!findOrder) {
            throw new HttpException(404, "예약 정보 조회 실패");
        }
        
        await this._orderRepository.updateOrder(orderId, params);

        return;
    }

    async deleteOrder(orderId: string): Promise<void> {
        await this._orderRepository.deleteOrder(orderId);
    }
}
export default class UserController {
    /**
     * @test
     * @summary Test
     * @requestBody <User>.exclude(id,created_at,updated_at)
     * @responseBody 201 - <User> - Success
     * @responseBody 401 - {"errors": [{"message": "error_message"}]}
     */
    public async test({ request }: { request: Request }): Promise<{ hello: unknown }> {
      const body = await request.json()
      return {
        hello: body,
      }
    }
  
    /**
     * @list
     * @summary List users
     * @responseBody 201 - <User[]> - Success
     * @responseBody 401 - {"errors": [{"message": "error_message"}]}
     */
    public async list({ request }: { request: Request }): Promise<{ hello: unknown }> {
      const body = await request.json()
      return {
        hello: body,
      }
    }
  }
  
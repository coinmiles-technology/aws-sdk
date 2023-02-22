// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DescribeAttachmentRequest,
  DescribeAttachmentRequestFilterSensitiveLog,
  DescribeAttachmentResponse,
  DescribeAttachmentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAttachmentCommand,
  serializeAws_json1_1DescribeAttachmentCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

export interface DescribeAttachmentCommandInput extends DescribeAttachmentRequest {}
export interface DescribeAttachmentCommandOutput extends DescribeAttachmentResponse, __MetadataBearer {}

/**
 * <p>Returns the attachment that has the specified ID. Attachments can include screenshots,
 *             error logs, or other files that describe your issue. Attachment IDs are generated by the
 *             case management system when you add an attachment to a case or case communication.
 *             Attachment IDs are returned in the <a>AttachmentDetails</a> objects that are
 *             returned by the <a>DescribeCommunications</a> operation.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeAttachmentCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeAttachmentCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new DescribeAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAttachmentCommandInput} for command's `input` shape.
 * @see {@link DescribeAttachmentCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 */
export class DescribeAttachmentCommand extends $Command<
  DescribeAttachmentCommandInput,
  DescribeAttachmentCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DescribeAttachmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAttachmentCommandInput, DescribeAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAttachmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAttachmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAttachmentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAttachmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAttachmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAttachmentCommandOutput> {
    return deserializeAws_json1_1DescribeAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}